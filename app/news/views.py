from django.views.generic import ListView
from news.models import News


class NewsListView(ListView):
    model = News
    context_object_name = "news"