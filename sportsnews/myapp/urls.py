

from django.urls import path
from .views import SportsListView
from . import views
from django.urls import path


urlpatterns = [
	path('scrape/', views.scrape2, name="scrape"),
	path('getsportsnews/', SportsListView.as_view(), name='sports_home'),
    path('', views.home1, name="starter"),
    path('menu/', views.menu_list, name='menu'),
]