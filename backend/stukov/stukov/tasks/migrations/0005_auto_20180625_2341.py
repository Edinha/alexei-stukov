# Generated by Django 2.0.6 on 2018-06-25 23:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_auto_20180625_2226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('backlog', 'backlog'), ('todo', 'todo'), ('todo', 'doing'), ('done', 'done')], default='backlog', max_length=100),
        ),
    ]
