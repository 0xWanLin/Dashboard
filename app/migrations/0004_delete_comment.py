# Generated by Django 3.1.4 on 2021-02-09 11:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_comment'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
