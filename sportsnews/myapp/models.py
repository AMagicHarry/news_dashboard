from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
