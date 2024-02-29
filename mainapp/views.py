from django.shortcuts import render

# Create your views here.

def index_views(request):
    return render(request,'index2-rtl.html')


def about_views(request):
    return render(request,'about-us-21.html')


def contact_views(request):
    return render(request,'contact-us-2.html')

def faq_views(request):
    return render(request,'faq.html')