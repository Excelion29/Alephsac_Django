from unicodedata import name
from django.db import models

class F_LSCD03(models.Model):    
    tasaVCV = models.JSONField()

class Document(models.Model):
    title = models.CharField(max_length=200)
    uploadedFile = models.FileField()
    dataTimeOfUpload = models.DateTimeField(auto_now=True)