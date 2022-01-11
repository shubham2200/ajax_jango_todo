from django.db import models

# Create your models here.
class employe_data(models.Model):
    employe_name = models.CharField(max_length=25)
    task = models.CharField(max_length=20)
    date_time = models.DateTimeField(auto_created= True , blank= True , null= True)
    
    def __str__(self):
        return str(self.employe_name)