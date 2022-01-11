from django.urls import path
from . views import *

urlpatterns = [
    path('', home, name='home'),
    path('save_data/', save_data , name="save_data"),
    path('delete_data/' , delete_data, name='delete_data')
    

]
