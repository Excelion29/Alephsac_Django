from django.template.loader import render_to_string
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.shortcuts import redirect

class F_LSCD_03(TemplateView):
    template_name = '/tables.html'
    
    @login_required(login_url="/login/")
    def F_LSCD_03(self, request, *args, **kwargs):
        tasaVCV = request.GET['tasaVCV']
        return JsonResponse(
            {
                'content': {
                    'message': 'Su mensaje ha sido enviado correctamente',
                }
            }
        )