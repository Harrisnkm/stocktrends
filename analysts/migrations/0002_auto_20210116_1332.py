# Generated by Django 3.1.5 on 2021-01-16 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analysts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyst',
            name='avatar',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]
