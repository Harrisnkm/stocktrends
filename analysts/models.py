from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Analyst(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    discord_server = models.CharField(max_length=100)
    discord_channel = models.CharField(max_length=100)
    discord_account = models.CharField(max_length=100)
    avatar = models.ImageField(blank=True)


    # def __str__(self):
    #     return self.discord_account