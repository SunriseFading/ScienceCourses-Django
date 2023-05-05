from account.forms import LoginForm, RegistrationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic.edit import FormView


class RegisterView(FormView):
    template_name = "index.html"
    form_class = RegistrationForm
    success_url = reverse_lazy("core:index")

    def form_valid(self, form):
        form.save()
        return super(RegisterView, self).form_valid(form)


class LoginView(FormView):
    template_name = "index.html"
    form_class = LoginForm
    success_url = reverse_lazy("core:index")

    def form_valid(self, form):
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user = authenticate(email=email, password=password)
        if user is None or not user.is_active:
            messages.error(self.request, "Неверный пароль")
            return self.form_invalid(form)
        login(self.request, user)
        return redirect(self.success_url)