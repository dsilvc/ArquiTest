## Pasos para probar en local

En la carpeta base de este servicio (```workers```) debe iniciar 2 terminales. En una de ellas correr los comandos en orden:
* ```bundle install```
* ```sidekiq```

En la otra terminal correr:
* ```rails s -p 8000``` (Dado que la aplicación principal correrá en el puerto 3333 y el frontend en el 3000 usaremos el 8000 para correr el servicio de Workers)

No necesitamos correr ningún comando relacionado a bases de datos dado que se utilizará la misma que el backend principal, que se necargará de correr todo eso.