from django.shortcuts import render
from .models import News, Project, Video


def index(request):
    news_list = News.objects.order_by('-date')[:5]
    current_projects = Project.objects.filter(is_current=True)
    completed_projects = Project.objects.filter(is_current=False)
    videos = Video.objects.all()
    return render(request, 'main/index.html', {
        'news_list': news_list,
        'current_projects': current_projects,
        'completed_projects': completed_projects,
        'videos': videos,
    })

def index(request):
    current_projects = Project.objects.filter(is_current=True)
    return render(request, 'main/index.html', {'current_projects': current_projects})