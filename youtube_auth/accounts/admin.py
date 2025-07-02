from django.contrib import admin
from django.contrib.auth.models import User

admin.site.site_header = "YouTube Clone Admin"
admin.site.site_title = "YT Admin Panel"

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'is_staff']
    search_fields = ['username', 'email']
    ordering = ['username']

admin.site.unregister(User)
admin.site.register(User, UserAdmin)

