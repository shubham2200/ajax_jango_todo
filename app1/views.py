from django.core.checks import messages
from django.shortcuts import *
from . models import *
from datetime import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
# home views function for show the data on html page 
def home(request):
    user = employe_data.objects.all()

 
    return render(request , 'home.html', {'user' : user})



#  save_data has for the save data and show data without page refresh
def save_data(request):
    try:
        if request.method == 'POST':
            eid = request.POST.get('empid')
            name = request.POST.get('name')
            task = request.POST.get('task')
            print(name , task)
            
            em_data = employe_data(employe_name = name , task = task , date_time = datetime.now())
           
            em_data.save()
            x = employe_data.objects.values()
            emp_data = list(x)
                # print(emp_data)
            return JsonResponse({"status":"save" , "emp_data": emp_data})
        else:
            return JsonResponse({"status": 0})     
    except Exception as e:
        # print('this is error try again' ,e)
        return JsonResponse({"status":"this error "})
   
# delete_data has for delete the data without page refresh
def delete_data(request):
    try:
        if request.method == "POST":
            id = request.POST.get('eid')
            # print(id)
            x = employe_data.objects.get(pk = id)
            x.delete()
            return JsonResponse({"status": 1})
        else:
            return JsonResponse({"status": 0})

    except:
        return render(request , 'home.html')

# edit part ajax get the id from django
@csrf_exempt
def edit_data(request ,pk , item):
    try:
        if request.method == "PUT":
            id = request.POST.get('eid')
            
            print(pk , item)
            e_data = employe_data.objects.get(id=pk)
            e_data.task = item
            e_data.save()
           
            return JsonResponse({"data":"success" })

    except:
        return render(request , 'home.html')

                
   
