from django.contrib import admin
from .models import News, Project, Video

admin.site.register(News)
admin.site.register(Project)
admin.site.register(Video)

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_current')
    fields = ('title', 'description', 'image', 'video', 'is_current')