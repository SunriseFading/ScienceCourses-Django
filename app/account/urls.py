from django.contrib.auth.views import LogoutView
from django.urls import path

from account.views import LoginView, RegisterView

app_name = "account"

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path(
        "login/",
        LoginView.as_view(),
        name="login",
    ),
    path("logout/", LogoutView.as_view(), name="logout"),
]
