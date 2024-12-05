from django.shortcuts import render

def admin_dashboard(request):
    return render(request, 'admin/dashboard.html', {'active_page': 'dashboard'})

def add_ipo(request):
    return render(request, 'admin/add_ipo.html' , {'active_page' : 'manage_ipo'})

def manage_ipo(request):
    return render(request, 'admin/manage_ipo.html', {'active_page': 'manage_ipo'})

# def view_all_ipos(request):


def user_dashboard(request):
    return render(request, 'user/dashboard.html')

def upcoming_ipo(request):
    return render(request, 'user/upcoming_ipo.html')

def signin(request):
    return render(request, 'admin/signin.html')
