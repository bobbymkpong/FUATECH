from django.urls import path
from . import views
#url configurations
urlpatterns =[
    path("",views.home),
    path("agriculture/", views.agriculture, name="agriculture"),
    path("engineering/", views.engineering, name="engineering"),
    path("computing/",views.computing,name="computing"),
    path("nutrition/",views.nutrition,name="nutrition"),
    path("agribusiness/",views.agribusiness,name="agribusiness")
]