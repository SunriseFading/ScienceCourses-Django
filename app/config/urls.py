from config.settings import MEDIA_ROOT, MEDIA_URL
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("core.urls")),
    path("news/", include("news.urls")),
    path("account/", include("account.urls")),
] + static(MEDIA_URL, document_root=MEDIA_ROOT)
