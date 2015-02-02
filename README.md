# polls_djangular
Django Polls with DRF API

Getting Started
---------------

### Initial Setup ###
1. Clone this repository : git clone https://github.com/campbellchri/polls_djangular.git
2. Make a new virtualenv (outside of the polls_djangular repository): ``virtualenv pollsEnv``
3. Activate the virtualenv: ``source pollsEnv/bin/activate``
4. Install the project requirements: ``pip install -r requirements.txt``
5. Edit ``mysite/settings.py:36`` to match your timezone
6. Navigate to the polls_djangular directory and sync the database : ``python manage.py syncdb``
7. Install the frontend dependencies : ``python manage.py bower_install``
8. Collect the static files : ``python manage.py collectstatic``
9. Run the server: ``python manage.py runserver 8080``
10. Navigate to the polls angular application  ``http://localhost:8080/polls_app/`` or admin at ``http://localhost:8080/admin`` (admin:admin)
11. Navigate to the polls angular application  ``http://localhost:8080/polls_app/`` or admin at ``http://localhost:8080/admin`` (admin:admin)

### After your first successful setup ###
1. Activate the virtualenv: ``source pollsEnv/bin/activate``
2. Run the server: ``python manage.py runserver``
    - for port 8080 ``python manage.py runserver 8080``
3. Open website in browser at ``http://localhost:8000/polls`` or admin at ``http://localhost:8000/admin`` (admin:admin)