from django.db import models


class User(models.Model):
    email = models.EmailField()
    nickname = models.CharField(max_length=32)
    passwd = models.CharField(max_length=64)
    user_image = models.CharField(max_length=64)

    @classmethod
    def create(cls, email, nickname, passwd):
        user = cls(email=email, nickname=nickname, passwd=passwd)
        return user


class Posts(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    filename = models.CharField(max_length=32)
    file_desc = models.TextField()
    created_at = models.DateField()


class Tags(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    tag_desc = models.CharField(max_length=32)


class Rating(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    file_desc = models.TextField()
    created_at = models.DateField()
