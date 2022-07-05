from django.urls import path

from api.views import TasaDosisView

urlpatterns = [
    path('tasa_dosis',TasaDosisView.as_view(),name='tasa_dosis_list')
]
