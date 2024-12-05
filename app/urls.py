from django.urls import path
from . import views

urlpatterns = [
    # Custom admin dashboard
    path('admin/', views.admin_dashboard, name='admin_dashboard'),
    path('admin/manage-ipo/add-ipo/', views.add_ipo, name='add_ipo'),
    path('admin/manage_ipo/', views.manage_ipo, name='manage_ipo'),
    path('admin/auth/signin/', views.signin, name='signin'),


    # User dashboard
    path('user/', views.user_dashboard, name='user_dashboard'),
    path('upcoming-ipo/', views.upcoming_ipo, name='upcoming_ipo'),
]
