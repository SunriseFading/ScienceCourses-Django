from django.forms import (
    CharField,
    EmailField,
    ModelForm,
    PasswordInput,
    TextInput,
    ValidationError,
)

from account.models import User


class RegistrationForm(ModelForm):
    email = EmailField(
        label="Введите e-mail",
        help_text="Необходим e-mail",
        error_messages={"required": "Необходим e-mail"},
    )
    password = CharField(
        label="Создайте пароль",
        widget=PasswordInput,
        error_messages={"required": "Необходим пароль"},
    )

    class Meta:
        model = User
        fields = ("email",)

    def save(self):
        user = super(RegistrationForm, self).save()
        user.is_active = True
        user.email = self.cleaned_data["email"]
        user.set_password(self.cleaned_data["password"])
        user.save()

    def clean_email(self):
        email = self.cleaned_data["email"]
        if User.objects.filter(email=email).exists():
            raise ValidationError("Такой e-mail уже зарегистрирован")
        return email


class LoginForm(ModelForm):
    email = EmailField(widget=TextInput)
    password = CharField(widget=PasswordInput)

    class Meta:
        model = User
        fields = ("password",)

    def clean_email(self):
        email = self.cleaned_data["email"]
        if not User.objects.filter(email=email):
            raise ValidationError("Аккаунта с таким e-mail не существует")
        return email
