from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')


def blog_post(request):
    return render(request, 'blog_post.html')


def category_page(request):
    return render(request, 'category_page.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')