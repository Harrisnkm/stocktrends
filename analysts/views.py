from django.shortcuts import render
from app.core.utils.helpers import _success_response, _json_response, _push_to_results
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import Analyst
import json

# Create your views here.

def get_analyst(request, analyst_id):
    ''' Returns a single Analyst'''
    analyst = Analyst.objects.filter(pk=analyst_id)
    analyst_str = serializers.serialize('json', analyst)
    analyst_json = json.loads(analyst_str)
    return_json = _json_response()
    return_json = _push_to_results('analyst', analyst_json[0], return_json)
    return JsonResponse(return_json)


def get_analysts(request):
    ''' Returns multiple Analysts'''
    analysts = Analyst.objects.all()
    analysts_str = serializers.serialize('json', analysts)
    analysts_json = json.loads(analysts_str)
    return_json = _json_response()
    return_json = _push_to_results('analysts', analysts_json, return_json)
    return JsonResponse(return_json)