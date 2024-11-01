# news/models.py
from django.db import models
from django.core.exceptions import ValidationError

def validate_image(image):
    filesize = image.file.size
    megabyte_limit = 5.0
    if filesize > megabyte_limit * 1024 * 1024:
        raise ValidationError(f"Max file size is {megabyte_limit}MB")

class ContactDetails(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    twitter_username = models.CharField(max_length=255)
    notes = models.TextField()
    image = models.ImageField(upload_to='images/', validators=[validate_image])  # Path to store images
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name
