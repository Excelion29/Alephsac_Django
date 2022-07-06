from rest_framework import serializers

from api.models import F_LSCD03

class TasadosisSerializer(serializers.ModelSerializer):
    class Meta:
        model = F_LSCD03
        fields = '__all__'