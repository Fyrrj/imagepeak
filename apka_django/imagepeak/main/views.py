from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.template import RequestContext
from django.views.decorators.cache import cache_page
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from main.models import User, Posts, Tags, Rating
from django.db.models import Count, Q
from datetime import datetime
import dateutil.relativedelta
from django.conf import settings


@csrf_exempt
def homepage(request):
    return render(request, "index.html")


@csrf_exempt
def my_album(request):
    if request.method == 'POST':
        if len(request.FILES) != 0:
            file = request.FILES['myFile']
            with open('{}{}/{}'.format(settings.MEDIA_URL, request.COOKIES['id'], file.name), 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)
    if 'nickname' not in request.COOKIES or 'id' not in request.COOKIES:
        return redirect('/main')
    else:
        col = [[], [], []]
        paths = Posts.objects.filter(user_id_id=int(request.COOKIES['id'])).order_by('-id')
        for i in range(len(paths)):
            col[i % 3].append(paths[i].filename)
        return render(request, "myalbum.html", {'paths': col})


@csrf_exempt
def ranking(request):
    if 'nickname' not in request.COOKIES or 'id' not in request.COOKIES:
        return redirect('/main')
    else:
        position = 1
        col = {}
        rate = Rating.objects.all().annotate(total=Count('post_id_id'))
        for i in rate:
            pst = Posts.objects.get(id=i.post_id_id)
            usr = User.objects.get(id=pst.user_id_id)
            if usr.nickname not in col:
                if usr.user_image == '':
                    col[usr.nickname] = [i.total, '/static/img/defaultAvatar.png']
                else:
                    col[usr.nickname] = [i.total, '/static/img/{}/{}'.format(usr.id, usr.user_image)]
            else:
                col[usr.nickname][0] += i.total
        sort = {k: v for k, v in sorted(col.items(), key=lambda item: item[1], reverse=True)}
        col = {}
        for key, value in sort.items():
            if position < 10:
                col[key] = {'pos': position, 'val': value[0], 'image': value[1]}
                position += 1
            else:
                break
        return render(request, "ranking.html", {'col': col})


@csrf_exempt
def user_settings(request):
    if 'nickname' not in request.COOKIES or 'id' not in request.COOKIES:
        return redirect('/main')
    else:
        return render(request, "usersettings.html")


def terms(request):
    return render(request, "terms.html")


@csrf_exempt
def welcome(request):
    if 'nickname' not in request.COOKIES or 'id' not in request.COOKIES:
        return redirect('/main')
    else:
        res = get_image_info(request.COOKIES['num'])
        result = render(request, "welcome.html", res)
        result.set_cookie('num', res['qty'])
        return result


@csrf_exempt
def welcome_next(request, next):
    if 'nickname' not in request.COOKIES or 'id' not in request.COOKIES:
        return redirect('/main')
    else:
        res = get_image_info(next)
        result = render(request, "welcome.html", res)
        result.set_cookie('num', next+1)
        return result


@csrf_exempt
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username', False)
        password = request.POST.get('password', False)
        email = request.POST.get('email', False)
        if User.objects.get(email__exact=email) is not None or User.objects.get(nickname__exact=username) is not None:
            return render(request, "index.html")
        else:
            user = User.create(email=email, nickname=username, passwd=password)
            user.save()
            res = get_image_info(1)
            result = render(request, "welcome.html", res)
            if user.user_image != '':
                result.set_cookie('user_image', "static/img/{}/{}".format(user.id, user.user_image))
            else:
                result.set_cookie('user_image', "/static/img/defaultAvatar.png")
            result.set_cookie('nickname', user.nickname)
            result.set_cookie('id', user.id)
            result.set_cookie('num', res['qty'])
            return result
    else:
        if 'nickname' in request.COOKIES and 'id' in request.COOKIES:
            res = get_image_info(request.COOKIES.num)
            return render(request, "welcome.html", res)
        return render(request, "index.html")


@csrf_exempt
def login_action(request):
    if request.method == 'POST':
        email = request.POST.get('email', False)
        password = request.POST.get('password', False)
        try:
            user = User.objects.get(email__exact=email, passwd__exact=password)
            if user is not None:
                res = get_image_info(1)
                result = render(request, "welcome.html", res)
                if user.user_image != '':
                    result.set_cookie('user_image', "static/img/{}/{}".format(user.id, user.user_image))
                else:
                    result.set_cookie('user_image', "/static/img/defaultAvatar.png")
                result.set_cookie('nickname', user.nickname)
                result.set_cookie('id', user.id)
                result.set_cookie('num', res['qty'])
                return result
            else:
                return render(request, "index.html")
        except:
            return render(request, "index.html")
    else:
        if 'nickname' in request.COOKIES and 'id' in request.COOKIES:
            res = get_image_info(request.COOKIES['num'])
            result = render(request, "welcome.html", res)
            result.set_cookie('num', res['qty'])
            return result
        return render(request, "index.html")


@csrf_exempt
def logout_action(request):
    result = redirect('/main')
    result.delete_cookie('user_image')
    result.delete_cookie('nickname')
    result.delete_cookie('id')
    return result


def handler400(request):
    return render(request, 'index.html', status=400)


def handler404(request):
    return render(request, 'index.html', status=404)


def handler500(request):
    return render(request, 'index.html', status=500)


def get_image_info(number):
    if isinstance(number, int):
        if number < 1:
            number = 1
        else:
            pass
    else:
        try:
            number = int(number)
        except:
            number = 1
    p = Posts.objects.order_by('-id')[:number]
    res = p[0]
    if number > len(p):
        number = 1
    for i in range(number):
        try:
            res = p[i]
        except:
            break
    tag = Tags.objects.filter(post_id_id__exact=res.id)
    tags = []
    for var in tag:
        tags.append("#{} ".format(var.tag_desc))
    rate = 0
    try:
        rates = Rating.objects.all().annotate(total=Count('post_id_id'))
        for i in rates:
            if i.post_id_id == res.id:
                rate += i.total
    except Exception as e:
        print(e)
    u = User.objects.get(id=res.user_id_id)
    rd = dateutil.relativedelta.relativedelta(datetime.now(), res.created_at)
    timer = ''
    if rd.days > 0:
        timer = "%d days" % rd.days
    elif rd.hours > 0:
        timer = "%d hours" % rd.hours
    elif rd.minutes > 0:
        timer = "%d min" % rd.minutes
    else:
        timer = '1 min'
    if u.user_image != '':
        usr_img = "static/img/{}/{}".format(u.id, u.user_image)
    else:
        usr_img = "/static/img/avatar.png"
    result = {'p': res, 'u': u, 't': tags, 'r': rate, 'now': timer, 'qty': number+1, 'usr_img': usr_img}
    return result


def add_point(request):
    usr = request.COOKIES['num']