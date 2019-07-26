from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Miembro, MiembroSerializer, GrupoName, GrupoNameSerializer


from rest_framework.permissions import IsAuthenticated
"""
The ContactsView will contain the logic on how to:
 GET, POST, PUT or delete the contacts
"""

class MiembroView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
       # userid = 1
        todos = Miembro.objects.filter(user_id=request.user.id).first()
        serializer = MiembroSerializer(todos, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        peo = request.data
        peo['user_id'] = request.user.id
        serializer = MiembroSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request):
        Miembro.objects.filter(user_id=request.user.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def put(self, request, userAccount):
        todo = Miembro.objects.filter(user_id=request.user.id, id=request.data['user_id']).first()
        serializer = MiembroSerializer(Miembro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GrupoNameView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request,grupoName = None ):
        if grupoName is not None:
            todos = GrupoName.objects.filter(grupoName=grupoName)
            serializer = GrupoNameSerializer(todos, many=False)
            return Response(serializer.data)
        else:
            todos = GrupoName.objects.all()
            serializer = GrupoNameSerializer(todos, many=True)
            return Response(serializer.data)

    def post(self, request):
        peo = request.data
        peo['user_id'] = request.user.id
        serializer = MiembroSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request):
        Miembro.objects.filter(user_id=request.user.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def put(self, request, userAccount):
        todo = Miembro.objects.filter(user_id=request.user.id, id=request.data['user_id']).first()
        serializer = MiembroSerializer(Miembro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
