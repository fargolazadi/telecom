from django.urls import path
from mainapp.views import *

app_name='mainapp'
urlpatterns=[
path('',index_views,name='index'),
path('about/',about_views,name='about'),
path('contact/',contact_views,name='contact')
]