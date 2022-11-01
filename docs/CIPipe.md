## Plataforma utilizada

Para crear el pipeline CI de la presnete entrega utilizamos Github Actions como plataforma con el fin de poder generar una integración más rápida y sencilla directamente desde el repositorio.

## Pasos para replicarla

La integración está implementada en la carpeta `/DockerBack` por lo que el pipe se encarga de hacer la integración en dicho espacio de la aplicación.

1. Se configuran los estados para que la integración corra cada vez que se hace un push o una pull request al master del repositorio en github.

2. Se especifican los trabajos que se desean realizar con este pipe. En nuestro caso estamos hablando de realizar una imagen del proyecto de acuerdo al `Dockerfile` de la carpeta.

3. Se le otorga un nombre a la imagen y se especifica que el directorio a integrar será el que contiene el _backend_ del proyecto.

4. Se corre el build para docker con el comando `docker build . --file Dockerfile --tag my-project-image:$(date +%s)`

## Información importante

La idea inicial era usar la configuración de Dockerfile del Backend para hacer la imagen en la integración. Sin embargo, debido a los problemas presentados en la entrega, se decidió continuar con el Deckerfile de la entrega anterior para mostrar como se hizo el proceso y que es replicable una vez resueltos los problemas.
