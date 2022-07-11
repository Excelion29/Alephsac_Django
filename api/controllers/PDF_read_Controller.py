
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.services.PDF_read_services import PDF_READ_SERVICES

@api_view(['POST'])
def PDF_READ(request):

    if request.method == "POST":
        services = PDF_READ_SERVICES.PDF_READ_POST(request.POST,request.FILES)
        return Response({'message':'Success','Lecturas':services})