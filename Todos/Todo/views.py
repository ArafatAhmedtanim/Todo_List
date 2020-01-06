from django.shortcuts import render
from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.


class TodosView(APIView):

    def get(self, request):
        todos = Todo.objects.all()
        todoSerializer = TodoSerializer(todos, many=True)
        return Response(todoSerializer.data)

    def post(self, request):
        todo = request.data
        todoSerializer = TodoSerializer(data=todo)

        if todoSerializer.is_valid():
            todoSerializer.save()
            return Response(todoSerializer.data)
        return Response(todoSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoView(APIView):
    def get_object(self, id):
        try:
            return Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, id):
        todo = self.get_object(id)
        todoSerializer = TodoSerializer(todo)
        return Response(todoSerializer.data)

    def put(self, request, id):
        todo = self.get_object(id)
        todoSerializer = TodoSerializer(todo, data=request.data)
        if todoSerializer.is_valid():
            todoSerializer.save()
            return Response(todoSerializer.data)
        return Response(todoSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        todo = self.get_object(id)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
