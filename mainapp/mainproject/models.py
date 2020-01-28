from django.db import models

# Create your models here.


# class Post(models.Model):
#     title = models.CharField(max_length=120)
#     slug = models.SlugField(blank=True, null=True)
#     content = models.TextField()
#     draft = models.BooleanField(default=False)
#     publish = models.DateField(auto_now=False, auto_now_add=False)
#     updated = models.DateTimeField(auto_now=True, auto_now_add=False)
#     timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
#
#     def __str__(self):
#         return self.title
#
#     class Meta:
#         ordering = ["-timestamp", "-updated"]
