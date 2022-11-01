## Resumen

Debido a varios contratiempos en cosas pequeñas relacionadas a esta entrega es que no pudimos completar en la totalidad esta entrega. No obstante, se lograron varios puntos requeridos. No pudimos subir esta entrega completa a AWS por problemas de conexión con Redis, por lo que se decidió subir lo mismo que la Entrega 0, pero en formato API (frontend y backend separados), pero en local todo funciona correctamente.

## Cosas logradas y no logradas

* A nivel local se logró casi todo lo solicitado. Se implementó la separación entre el frontend y backend. Se implementó también el servicio de workers, pero no en su totalidad. El backend hace llamados al servicio de workers para calcular la complejidad utilizando los últimos 2000 registros de la base de datos, y guarda esa misma complejidad en la misma base de datos, que luego nuestro backend lo envía al frontend para ser mostrado. No se implementó ```Sidekiq::Status``` por problemas al configurar el middleware necesario para su correcto funcionamiento, por lo que no se puede ver el estado de los workers. 
* A nivel de AWS tuvimos un problema que no pudimos solucionar con Redis. No logramos conectar nuestro servicio de Workers al contenedor de Redis, por lo que decidimos subir una versión sin este servicio implementado.
* Si se desarrolló el diagrama UML explicando la arquitectura de nuestro sistema completo, y también se configuró un budget alert en la página de AWS. También, si bien se configuró un archivo para realizar el workflow de CI, como no pudimos lograr una versión final de todo el backend dockerizado (API + Servicio de Workers), no llegamos a una versión final de este archivo.

## Orden

El repositorio está un poco desordenado, pero en breve, en la carpeta ```Conexion``` se encuentra el archivo de conexión al broker el cual solo se debe correr como un archivo de ruby normal, por consola. En la carpeta ```backArqui``` se encuentra el backend principal de nuestra aplicación. En la carpeta ```WorkersApi``` se encuentra el servicio de Workers para nuestra aplicación. En ```docs``` está toda la documentación pedida. En ```Front-react``` está el frontend para nuestra aplicación. Cada carpeta tiene su propio README explicando los pasos y comandos a seguir para levantar todo. Además, en el archivo ```LocalRun.md``` dentro de ```docs``` hay un resumen de todo, por si llegase a haber algún inconveniente leyendo los distintos READMEs en distintas carpetas.