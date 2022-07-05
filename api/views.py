
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
        # jd = list(map(lambda x:x, request))
        datos = {'message':'Success','tasas_dosis':request}

        return request

    def put(self, request):
        pass

    def delete(self, request):
        pass

