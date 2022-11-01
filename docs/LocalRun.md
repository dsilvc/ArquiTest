## Sobre la aplicación

La aplicación solicitada está montada con un backend en Ruby que es consumido a modo de API por el frontend desarrollado en react con TypeScript.

## Paso a paso

### Backend

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


### Frontend

El front de la aplicación está basado en lo visto en el curso IIC2513 - Tecnologías y Aplicaciones Web, Pontificia Universidad Católica de Chile.

#### Requisitos previos:

- PostgreSQL: Configuración de archivo con las credenciale sy base de datos en `src/config/database.js`
- Node.js LTS (10.x o 12.x)
- Yarn

#### Setup del proyecto:

- Clone repository
- Install dependencies: `yarn install`

#### Setup de la base de datos:

- Para Mac OS X usando Homebrew: `brew install postgresql`

  - Inciar el servicio: check [LaunchRocket](https://github.com/jimbojsb/launchrocket) or [lunchy](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/) for postgresql service management

- [Other platforms](https://www.postgresql.org/download/)

#### Crear base de datos:

```sh
createdb iic2513template_dev
```

#### Correr migraciones:

```sh
./node_modules/.bin/sequelize db:migrate
```

### Correr la aplicación:

```sh
yarn start
```

o

```sh
node index.js
```

O la opción para que se vaya refrescando

```sh
yarn dev
```

Ahora, se puede abrir la aplicación en el `localhost` accediendo al puerto 3000

Ir a: `http://localhost:3000` para ver la aplicación corriendo localmente.

## Documentacion API:

> https://documenter.getpostman.com/view/18294250/2s83tCKYeT

Para pruebas de la vista de emergencias sin token comentar linea 2 de `backArqui/app/controllers/emergencies_controller.rb`

> before_action :authenticate_user!
