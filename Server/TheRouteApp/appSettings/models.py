from django.db import models

# Create your models here.
class Setting(models.Model):
    name = models.CharField(max_length=250,blank=False,null=False,default="name")
    value = models.CharField(max_length=250,blank=True,null=False,default="")
