from django.views.generic import DetailView, ListView
from news.models import News


class NewsListView(ListView):
    model = News
    context_object_name = "news"


class NewsDetail(DetailView):
    model = News
    context_object_name = "item"
    slug_field = "slug"