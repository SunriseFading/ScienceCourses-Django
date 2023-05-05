from django.db.models import CharField, DateTimeField, ImageField, Model, TextField


class News(Model):
    title = CharField(max_length=128, verbose_name="Заголовок")
    text = TextField(verbose_name="Основной текст")
    image = ImageField(
        verbose_name="Изображение", upload_to="news/", blank=True, null=True
    )
    created = DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

        ordering = [
            "-created",
        ]

    def __str__(self):
        return self.title
