# Generated by Django 2.2.4 on 2019-08-22 21:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20190822_2130'),
    ]

    operations = [
        migrations.RenameField(
            model_name='miembro',
            old_name='gruponame',
            new_name='gruponame_id',
        ),
    ]
