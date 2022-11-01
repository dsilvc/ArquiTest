## Pasos para probar en local

En la carpeta base del backend de este proyecto (```backArqui```) correr los comandos en orden:
* ```bundle install```
* ```rails db:reset``` (Por si en algún caso tenga una base de datos con el mismo nombre que la nuestra)
* ```rails db:migrate```
* ```rails db:seed```(opcional: solo si desea partir con datos dummy)

Ejecutar en la consola:
* ```rake secret```

Y luego colocar el valor en un archivo .env en la carpeta ```backArqui```, de la siguiente forma:
* ```DEVISE_JWT_SECRET_KEY=<rake secret>```
* ```rails s -p 3333``` (Usaremos el 3000 ya que el frontend correrá en el 3000)
