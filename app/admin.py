from django.contrib import admin
from .models import Intership, Comment

# Register your models here.

class Internship(admin.ModelAdmin):
    list_display = ("demisto_id", "ticket_title", "ticket_created", "ticket_priority", "ticket_priority2", "ticket_status", "ticket_owner", "ticket_sourceip", "ticket_details", "ticket_vib_owner", "ticket_id", "created_by",)

    def approve_comments(self, request, queryset):
        queryset.update(active=True)
        
admin.site.register(Intership, Internship)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'body')

    def approve_comments(self, request, queryset):
        queryset.update(active=True)
    
admin.site.register(Comment, CommentAdmin)