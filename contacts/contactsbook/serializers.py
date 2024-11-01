# news/serializers.py
from rest_framework import serializers
from .models import ContactDetails

class  ContactDetailsSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model =  ContactDetails
        # fields = ['id', 'title', 'content', 'image', 'created_at']
        fields = '__all__'
