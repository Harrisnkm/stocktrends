from django.urls import path
from . import views

urlpatterns = [
    path('<int:analyst_id>/', views.get_analyst),

]