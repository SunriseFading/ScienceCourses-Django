from django.views.generic import ListView
from news.models import News
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy


class NewsListView(LoginRequiredMixin, ListView):
    model = News
    context_object_name = "news"
    paginate_by = 2
    login_url = reverse_lazy("account:login")