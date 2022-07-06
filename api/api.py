import json
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from api.serializer import TasadosisSerializer
from api.services.F_LSCD03_services import F_LSCD_03

@api_view(['GET','POST'])
def TasaDosisAPIView(request):


    if request.method == 'GET':
        datos = {'message':'Success','tasas_dosis':'Hola'}     
        return JsonResponse(datos)

    elif request.method == 'POST':
        tasa_dosis_serializer = TasadosisSerializer(data = request.data)
        if tasa_dosis_serializer.is_valid():
            services = F_LSCD_03.get_tasa_dosis_VCV(tasa_dosis_serializer.data)
            return Response({'message':'Success','tasaVCV':services})
        return Response(tasa_dosis_serializer.errors)
        
    elif request.method == 'PUT':
        pass
