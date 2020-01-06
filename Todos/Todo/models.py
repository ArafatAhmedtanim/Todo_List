from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
# Create your models here.


class Todo(models.Model):
    des = models.CharField(max_length=300)
    status = models.BooleanField(default=False)
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Todo, self).save(*args, **kwargs)

    def __str__(self):
        return self.des

    class Meta:
        db_table = "todo"
