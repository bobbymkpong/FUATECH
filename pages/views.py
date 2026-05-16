from django.shortcuts import render
def home(request):
    return render(request,'site1.html')
# Create your views here.
def agriculture(request):
    return render(request,'agriculture.html')
def engineering(request):
    return render(request,'engineering.html')

def computing(request):
    return render(request,'computing.html')

def nutrition(request):
    return render(request,'nutrition.html')

def agribusiness(request):
    return render(request,'agribusiness.html')