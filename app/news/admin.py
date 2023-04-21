from django.contrib import admin
from news.models import News


@admin.register(News)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "created")
    ordering = ("title", "created")
