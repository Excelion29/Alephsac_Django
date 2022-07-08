from django.urls import path
from api.api import TasaDosisAPIView
from api.controllers.F_LSCF_012_Controller import F_LSCD_012


urlpatterns = [
    path('tasa_dosis',TasaDosisAPIView,name='tasa_dosis_list'),
    path('F_LSCD_012',F_LSCD_012,name='tasa_dosis_F_LSCD_012'),
]
