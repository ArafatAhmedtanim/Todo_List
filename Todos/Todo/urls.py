from django.urls import path
from . import views

urlpatterns = [
    path('', views.TodosView.as_view(), name='todos_views'),
    path('<int:id>', views.TodoView.as_view(), name='todo_views')
]
