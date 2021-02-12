from django.contrib.auth import authenticate
from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):
    name = forms.CharField(
        label='Name',
        max_length=255,
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Name'
            }
        )
    )

    body = forms.CharField(
        label='Comment',
        max_length=255,
        widget=forms.Textarea(
            attrs={
                'placeholder': 'Comment'
            }
        )
    )

    class Meta:
        model = Comment
        fields = ['name', 'body']