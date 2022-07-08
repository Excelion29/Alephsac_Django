
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.services.F_LSCD012_services import F_LSCD_012_service

@api_view(['POST'])
def F_LSCD_012(request):

    if request.method =="POST":
        services = F_LSCD_012_service.get_lecturas_dosis_VCV(request.data)
        return Response({'message':'Success','Lecturas':services}) 