from django.urls import path
from . import views
#url configurations
urlpatterns =[
    path("",views.home),
    path("agriculture/", views.agriculture, name="agriculture"),
    path("engineering/", views.engineering, name="engineering")
]