# Generated by Django 4.0.1 on 2022-01-11 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employe_data',
            old_name='postion',
            new_name='task',
        ),
    ]