from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.stock_info),
    path('financials/(?:/(?P<quarterly>[\w]+)/)?', views.stock_financials),


]