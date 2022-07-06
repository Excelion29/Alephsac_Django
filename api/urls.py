from django.urls import path
from api.api import TasaDosisAPIView


urlpatterns = [
    path('tasa_dosis',TasaDosisAPIView,name='tasa_dosis_list')
]
