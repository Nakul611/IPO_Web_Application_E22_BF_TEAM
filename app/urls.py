from django.urls import path
from . import views

urlpatterns = [
    # Custom admin dashboard
    path('admin/', views.admin_dashboard, name='admin_dashboard'),
    path('admin/add-ipo/', views.add_ipo, name='add_ipo'),
    path('admin/view-ipos/', views.view_all_ipos, name='view_ipos'),
    path('admin/signin/', views.signin, name='signin'),


    # User dashboard
    path('user/', views.user_dashboard, name='user_dashboard'),
    path('upcoming-ipo/', views.upcoming_ipo, name='upcoming_ipo'),
]
