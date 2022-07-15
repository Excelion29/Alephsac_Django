
from wsgiref.util import request_uri
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.services.PDF_read_services import PDF_READ_SERVICES

@api_view(['POST'])
def PDF_READ(request):

        services = PDF_READ_SERVICES.PDF_READ_POST(request.FILES['file'])
        return Response({'message':'Success','Lecturas':services})