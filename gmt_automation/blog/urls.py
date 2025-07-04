from django.urls import path
from . import views

app_name = 'blog'  # Define the namespace

urlpatterns = [
    path('', views.post_list, name='post_list'),  # Root path for blog list
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]