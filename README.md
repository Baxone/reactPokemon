# Creacion de proyecto
Este proyecto esta creado con create-react-app 
(https://github.com/facebook/create-react-app).

He instalado Sass a través de npm i sass

He usado una libreria que se llama wouter muy ligera y que no tiene dependencias para generar las rutas de carga de los diferentes componente creados.

Todas las peticiones a la API (que esta en el otro proyecto), se realizan a través del servicio que he creado dentro de la carpeta servicios y donde he ido poniendo todas las llamadas a las diferentes peticiones tanto para traerme la lista completa de pokemons, el pokemon por id, y la busqueda por nombre que tambien la genero desde la api.

## Arrancar el proyecto
Antes de arrancar el proyecto cargar las dependencias que estan en el fichero package.json a través de:

### `npm i`

En el directorio del proyecto puedes arrancar la instancia en local a través de este comando:

### `npm run start`

Arrancarás el proyecto en el puerto 4500 tal y como esta definido en el fichero de variables de entorno .env\
Abrir [http://localhost:4500](http://localhost:4500) en el navegador.

He creado un .env que he incluido en el repositorio, para poder arrancar la aplicación en un puerto distinto ya que la aplicacion de backend la cargo en el puerto 3000.