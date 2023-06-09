from django.urls import include, path
from django.views.generic import TemplateView

app_name = "core"

urlpatterns = [
    path(
        "features/",
        TemplateView.as_view(template_name="features.html"),
        name="features",
    ),
    path("", TemplateView.as_view(template_name="index.html"), name="index"),
]
