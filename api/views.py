
import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


class TasaDosisView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request,*args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        datos = {'message':'Success','tasas_dosis':'Hola'}     
        return JsonResponse(datos)

    def post(self, request):
        jd= json.loads(request.body)
        datos = {'message':'Success','tasas_dosis':jd['tasa_dosis']}
        return JsonResponse(datos)

    def put(self, request):
        pass

    def delete(self, request):
        pass

