# Generated by Django 2.0.6 on 2018-06-26 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0009_task_image_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='image_url',
        ),
        migrations.AddField(
            model_name='project',
            name='image_url',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
    ]
