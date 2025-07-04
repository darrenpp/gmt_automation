from django.db import models


class News(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    content = models.TextField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    video = models.FileField(upload_to='projects/videos/', null=True, blank=True)
    is_current = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    


class Video(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_file = models.FileField(upload_to='videos/')

    def __str__(self):
        return self.title
