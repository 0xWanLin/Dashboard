# Generated by Django 3.1.4 on 2021-02-09 12:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_comment_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='active',
        ),
    ]
