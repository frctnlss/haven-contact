# haven-contact

Start up the application to access the frontend at `http://localhost:8090`
```bash
sh start-stack.sh
```

Restart application
```$xslt
sh restart-stack.sh
```

Stop application
```bash
sh stop-stack.sh
```

To access the database, use your database access service of choice (ex: on MacOS SequelPro is a good option)
Host: 127.0.0.1 or localhost
User: root
Pass: secret
Port: 33070

To access any container
```bash
docker exec -it <container_name> bash
```

Containers include:
  - `api_fpm` for the laravel php instance
  - `web_app_watcher` for the react frontend builder
  - `api_db` for hosting the database instance used with laravel
  - `nginx` for serving up the react static build files and connecting to the api through fastcgi
