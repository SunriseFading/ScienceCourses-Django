from django.urls import path

from news.views import NewsDetail, NewsListView

app_name = "news"

urlpatterns = [
    path("", NewsListView.as_view(), name="list"),
    path("<slug:slug>/", NewsDetail.as_view(), name="detail"),
]
