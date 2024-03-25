# CasaBlanca_Challenge

- Descripcion

Este proyecto es el Challenge técnico de la empresa CasaBlanca, el cual consiste en la implementación de un CRM con funcionalidades básicas como: Registro de Usuarios, 
Login de Usuarios, Registro de Clientes, Visualización de Clientes creados, Opción para habilitar y deshabilitar Clientes, Boton para eliminar Clientes, Visualización de Usuarios registrados en la app y Boton de Logout.

# **Instrucciones de Instalación**

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

# **Instrucciones de Uso**

Inicialmente la app estara vacia, asi que deberas crear tu Usuario en el formulario de Registro, posteriormente la app te redirigirá al Login, donde ingresaras con tu Email y Contraseña. Al ingresar notaras que la lista de Clientes esta vacia, debes hacer click en el boton de "Añadir Cliente" y completar el formulario para crear un Cliente nuevo. Una vez hecho eso la app te va a redirigir a el componente de la lista de Clientes. Una vez ahí podras habilitar y deshabilitar al usuario en la casilla de check o eliminarlo en el boton de eliminacion (x).

Luego podras dirigirte a la sección de Usuarios donde podras ver el Usuario e Email con el cual te registraste debido a que este componente te mostrará a todos los Usuarios registrados en la app. Puedes corroborarlo haciendo logout en el boton de la esquina superior derecha, registrar otro usuario con un Email diferente y volviendo a ingresar a la app con tu cuenta o la cuenta del usuario nuevo. 

# **¡Espero que este Proyecto sea de tu agrado y que tengas un lindo dia!**





