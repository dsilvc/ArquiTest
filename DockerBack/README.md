## Pasos para probar en local

En la carpeta base del backend de este proyecto (```backArqui```) correr los comandos en orden:

Ejecutar en la consola:
* ```rake secret```

Y luego colocar el valor en un archivo .env en la carpeta ```backArqui```, de la siguiente forma:
* ```DEVISE_JWT_SECRET_KEY=<rake secret>```

Corremos docker compose de forma local:
* ```docker compose build```
* ```docker compose run api rake db:create```
* ```docker compose run api rake db:migrate```
* ```docker compose up```