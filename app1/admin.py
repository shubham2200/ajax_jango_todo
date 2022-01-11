from django.contrib import admin
from . models import *
# Register your models here.

class employeAdmin(admin.ModelAdmin):
    list_display = ('employe_name'  ,'task','date_time')
admin.site.register(employe_data , employeAdmin)