from django.db.models import (
    CharField,
    DateTimeField,
    ImageField,
    Model,
    SlugField,
    TextField,
)
from django.urls import reverse


class News(Model):
    title = CharField(max_length=128, verbose_name="Заголовок")
    lead = CharField(max_length=200, verbose_name="Лид текст")
    text = TextField(verbose_name="Основной текст")
    slug = SlugField(max_length=130, unique=True)
    created = DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

        ordering = [
            "-created",
        ]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("news:detail", kwargs={"slug": self.slug})