from django.shortcuts import render

def admin_dashboard(request):
    return render(request, 'admin/dashboard.html')

def add_ipo(request):
    return render(request, 'admin/add_ipo.html')

def view_all_ipos(request):
    return render(request, 'admin/view_ipos.html')

def user_dashboard(request):
    return render(request, 'user/dashboard.html')

def upcoming_ipo(request):
    return render(request, 'user/upcoming_ipo.html')

def signin(request):
    return render(request, 'admin/signin.html')
