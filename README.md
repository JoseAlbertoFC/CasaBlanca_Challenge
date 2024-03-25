# CasaBlanca Challenge

- Descripcion

Este proyecto es el Challenge técnico de la empresa CasaBlanca, el cual consiste en la implementación de un CRM con funcionalidades básicas como: Registro de Usuarios, 
Login de Usuarios, Registro de Clientes, Visualización de Clientes creados, Opción para habilitar y deshabilitar Clientes, Boton para eliminar Clientes, Visualización de Usuarios registrados en la app y Boton de Logout.

# **Instrucciones de Instalación.**

- Paso 1 : Clonacion del Repositorio 

Clonamos el repositorio desde la plataforma de GitHub:

1. Para esto debemos abrir una terminal y ubicarnos en la carpeta de nuestra preferencia, en dicha carpeta se clonara el repositorio.
2. Luego iremos al link de GitHub y haremos click en el boton que dice "Code" y copiaremos la url que aparece ahí.
3. De vuelta en la terminal que habiamos abierto anteriormente escribiremos el comando "git clone" seguido de la url que copiamos de GitHub y daremos un Enter.
4. Esto empezara a clonar el repositorio desde GitHub a nuestra PC y lo tendremos disponible.

- Paso 2 : Instalación de Base de Datos

Instalamos mySQL desde la plataforma oficial para el sistema operativo que utilices (Puedes descargar tambien la interfaz grafica de mySQl la cual se denomina mySQL Workbench).

Creamos nuestro usuario y contraseña para la base de datos.

Creamos una base de datos que debe llevar por nombre "CRM", de esta manera coincidira con la configuracion de la app y nos permitira conectarla sin ningun problema.

Conectamos la base de dato "CRM" a nuestra app a traves de la terminal o a traves de mySQL Workbench.

Para crear la Base de Datos por la terminal de MySQL tenemos que:

1. Acceder a la terminal con el comando mysql -u usuario -p
2. Te pedirá la contraseña con la que creaste usuario en MySQL
3. CREATE DATABASE CRM;
4. USE CRM;

Ya con esto creaste y te conectaste a la Base de Datos CMR en MySQL mediante la terminal.

Para MySQL Workbench:
1. Descargar MySQL Worbench para tu Sistema Operativo si no lo tienes ya.
2. Acceder a MySQL Workbench y dar click en el botón que dice My Local Instance.
3. Aparecerá un cuadro de diálogo donde colocarás tu contraseña.
4. Una vez dentro habrá un espacio tipo terminal donde puedes escribir los mismos comandos que en la terminal para crear la Base de datos, no obstante, se puede ir hasta un apartado en la parte izquierda donde los SCHEMAS se colocan. Una vez ubicado en SCHEMAS, click derecho y click izquierdo sobre Create Schema. Se abrirá otra pestaña en el editor donde colocarás el nombre del Schema (en minúscula). Le das al botón Apply ubicado en la parte inferior derecha de la pestaña y se debe crear la nueva base de datos.
5. Una vez creada la Base de Datos, vas a Database en la barra de herramientas superior y le das click a Manage Connections. Se abrirá una pestaña donde colocaras en el input Default Schema el nombre de la Base de Datos. Le das a Test Connection y debe de decirte que se logró establecer la conexión, seguido de los datos con los que accedes como el user, host, port y SSL.


- Paso 3 : Inicializar el Servidor y la UI

Una vez que tengamos el repositorio clonado y la Base de Datos lista, vamos a inicializar el Servidor y la UI de la app de la siguiente manera:

1. Para inicializar el Servidor, abriremos nuestro repositorio y nos posicionaremos en la carpeta "API".
2. Una vez posicionados en la carpeta "API", abriremos una terminal integrada en esta carpeta y ejecutaremos el comando "npm start".
3. Sabremos que nuestro servidor se inicializo correctamente cuando veamos el log "Listening on port 3001".
4. Para inicializar la UI nos pocisionaremos en la carpeta "Client".
5. Una vez posicionados en la carpeta "Client", abriremos una terminal integrada en esta carpeta y ejecutaremos el comando "npm run dev".
6. Sabremos que nuestra UI se inicializo correctamente cuando veamos el link (http://localhost:5173/) al cual le daremos ctrl + click y se abrira una pestaña del navegador con nuestra UI.

- Nota para el .env / Variables de entorno:

Estas son las variables de entorno mas importantes presentes en la carpeta "API" de la app.

DB_USER=root
DB_PASSWORD=Tango01
DB_HOST=localhost
DB_NAME=CRM
PORT=3001

Ten en cuenta que debes cambiar la DB_PASSWORD por la contraseña de tu Base de Datos y la DB_USER por el usuario de tu Base de datos.

# **Instrucciones de Uso.**

Inicialmente la app estara vacia, asi que deberas crear tu Usuario en el formulario de Registro, posteriormente la app te redirigirá al Login, donde ingresaras con tu Email y Contraseña. Al ingresar notaras que la lista de Clientes esta vacia, debes hacer click en el boton de "Añadir Cliente" y completar el formulario para crear un Cliente nuevo. Una vez hecho eso la app te va a redirigir a el componente de la lista de Clientes. Una vez ahí podras habilitar y deshabilitar al usuario en la casilla de check o eliminarlo en el boton de eliminacion (x).

Luego podras dirigirte a la sección de Usuarios donde podras ver el Usuario e Email con el cual te registraste debido a que este componente te mostrará a todos los Usuarios registrados en la app. Puedes corroborarlo haciendo logout en el boton de la esquina superior derecha, registrar otro usuario con un Email diferente y volviendo a ingresar a la app con tu cuenta o la cuenta del usuario nuevo. 

# **Información Adicional (EndPoints).**

1. (localhost:3001/users/createUser) : Este endPoint es el que permite la creación de Usuarios, este recibe por body los parametros presentes en el formulario, ejemplo:

`{
	"fullName": "Jose Fuentes",
	"email": "josefuentes@gmail.com",
	"password": "josefuentes"
}`

Respuesta

`{
	"id": "e9a4000c-c541-4c46-a7ff-6915ecc650ae",
	"fullName": "Jose Fuentes",
	"email": "josefuentes@gmail.com",
	"password": "josefuentes"
}`

2. (localhost:3001/users/loginUser) : Este endPoint es el que permite que el Usuario pueda hacer login, este recibe por body los parametros presentes en el formulario, ejemplo:

`{
	"email": "josefuentes@gmail.com",
	"password": "josefuentes"
}`

Respuesta

`{
	"userId": "e9a4000c-c541-4c46-a7ff-6915ecc650ae",
	"email": "josefuentes@gmail.com",
	"userName": "Jose Fuentes",
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOWE0MDAwYy1jNTQxLTRjNDYtYTdmZi02OTE1ZWNjNjUwYWUiLCJlbWFpbCI6Impvc2VmdWVudGVzQGdtYWlsLmNvbSIsImlhdCI6MTcxMTMxNjQ2OCwiZXhwIjoxNzEzOTQ0NDY4fQ.b7pGKiNxuDQEz-SUUb1SBcpyDJGeEMftOP12jHJJAOM",
	"message": "Perfect! You are logged in."
}`

3. (localhost:3001/users/showUsers) : Este endPoint es el que permite mostrar la lista de Usuarios, este es una peticion de tipo GET asi que no recibe nada por body y da una respuesta, ejemplo:

Respuesta

`[
	{
		"id": "0f998228-d30d-4ffc-b9b4-9aa8f491c0c3",
		"fullName": "Mariana Martin",
		"email": "marianamartin@gmai.com",
		"clients": []
	},
	{
		"id": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
		"fullName": "Juana Manso",
		"email": "juanamanso@gmail.com",
		"clients": [
			{
				"id": "f74b4cf3-0e04-4b38-b8a8-5f4827457f4e",
				"fullName": "Kevin",
				"email": "kevin@gmail.com",
				"age": "29",
				"phoneNum": "+5412345678",
				"status": "Habilitado",
				"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304"
			},
			{
				"id": "c15ce88e-692e-4ad1-8a7c-b12146c6929d",
				"fullName": "Gustavo Rojas",
				"email": "gustavorojas@gmail.com",
				"age": "25",
				"phoneNum": "+541235896",
				"status": "Habilitado",
				"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304"
			},
        ]
	},
	{
		"id": "e525bcca-428e-4bd2-8453-4597c27cf984",
		"fullName": "JoseFuenmayor",
		"email": "josefuenmayor@gmail.com",
		"clients": []
	}
]`

4. (localhost:3001/clients/createClient) : Este endPoint es el que permite la creación de Clientes, este recibe por body los parametros presentes en el formulario, ejemplo:

`{
	"fullName": "Pedro Perez",
	"email": "pedroperez@gmail.com",
	"age": "42",
	"phoneNum": "+5487654321",
	"status": "Habilitado",
	"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304"
}`

Respuesta

`{
	"id": "0579179c-ccd3-423f-b91a-bb52e73937ee",
	"fullName": "Pedro Perez",
	"email": "pedroperez@gmail.com",
	"age": "42",
	"phoneNum": "+5487654321",
	"status": "Habilitado",
	"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304"
}`

5. (localhost:3001/clients/showClients) : Este endPoint es el que permite mostrar la lista de Clientes, este es una peticion de tipo GET asi que no recibe nada por body y da una respuesta, ejemplo:

Respuesta

`[
	{
		"id": "0579179c-ccd3-423f-b91a-bb52e73937ee",
		"fullName": "Pedro Perez",
		"email": "pedroperez@gmail.com",
		"age": "42",
		"phoneNum": "+5487654321",
		"status": "Habilitado",
		"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
		"user": {
			"id": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
			"fullName": "Juana Manso",
			"email": "juanamanso@gmail.com",
			"password": "puertomadero"
		}
	},
	{
		"id": "6eac2189-372d-4c54-8810-c8f81e52be89",
		"fullName": "Kevin",
		"email": "kevin@gmail.com",
		"age": "29",
		"phoneNum": "+5412345678",
		"status": "Deshabilitado",
		"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
		"user": {
			"id": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
			"fullName": "Juana Manso",
			"email": "juanamanso@gmail.com",
			"password": "puertomadero"
		}
	}
]`

6. (localhost:3001/clients/deleteClient/${id}) : Este endPoint es el que permite eliminar Clientes de la lista, este recibe por params el id del Cliente que se desea eliminar y da como respuesta:

`{
  message: "This Client was successfully removed",
  deletedClient: {
		"id": "6eac2189-372d-4c54-8810-c8f81e52be89",
		"fullName": "Kevin",
		"email": "kevin@gmail.com",
		"age": "29",
		"phoneNum": "+5412345678",
		"status": "Deshabilitado",
		"userId": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
		"user": {
			"id": "a63feedb-9cbe-44a0-8db2-1582dce0e304",
			"fullName": "Juana Manso",
			"email": "juanamanso@gmail.com",
			"password": "puertomadero"
		}
	},
}`

7. (localhost:3001/clients/updateClient/${id}) : Este endPoint es el que permite modificar Clientes de la lista, este recibe por params el id del Cliente que se desea modificar y recibe tambien por body el objeto Cliente, ejemplo:

`{
	"fullName": "Kevin",
	"email": "kevin@gmail.com",
	"age": "29",
	"phoneNum": "+5412345678",
	"status": "Deshabilitado"
}`

Respuesta

`{
	"fullName": "Kevin",
	"email": "kevin@gmail.com",
	"age": "29",
	"phoneNum": "+5412345678",
	"status": "Habilitado"
}`

# **¡Espero que este Proyecto sea de tu agrado y que tengas un lindo dia!**





