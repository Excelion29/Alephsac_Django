# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from unicodedata import name
from django.urls import path, re_path
from apps.home import views
from apps.home.F_LSCD_03.views import (F_LSCD_03)
from django.conf.urls import url


urlpatterns = [

    # The home page
    path('', views.index, name='home'),

    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),
    
]
