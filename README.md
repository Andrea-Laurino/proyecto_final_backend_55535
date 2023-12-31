# PROYECTO FINAL DESARROLLO BACKEND - CODERHOUSE

> [!NOTE]
>
> ## Estructura general del proyecto
>
> El proyecto sigue la siguiente estructura de directorios:
>
> - `.env.example`: Archivo de ejemplo que muestra la >estructura y variables de entorno requeridas para la >configuración de la aplicación.
>
> - `src/components`: Carpeta contenedora de todos los componentes. Cada componente contiene un archivo index.js con sus rutas, una carpeta de controlador y una de servicios.
>
> - `src/config`: Configuración de la aplicación.
>
> - `src/dao`: Configuración de persistencia de datos.
>
> - `src/docs`: Documentación.
>
> - `src/models`: Modelos de datos de la aplicación.
>
> - `src/public`: Archivos públicos de la aplicación, como estilos CSS, imágenes y scripts JavaScript.
>
> - `src/repositories`: Capas de acceso de datos.
>
> - `src/routes`: Definición de rutas de la aplicación.
>
> - `src/scripts`: Scripts.
>
> - `src/uploads`: Repositorios de archivos subidos.
>
> - `src/utils`: Archivos relacionados con la configuración de las utilidades reutilizables.
>
> - `src/views`: Todas las vistas del proyecto.
>
> - `src/test`: Test de funcionalidades.
>
> - `src/index.js`: Punto de entrada principal para la ejecución de la aplicación.
>
> - `src/errors.log`: Registro de errores.

> [!IMPORTANT]
>
> ## Variables de entorno
>
> | Variable               | Descripción                                                   |
> | ---------------------- | ------------------------------------------------------------- |
> | `PORT`                 | Puerto de la aplicación. Valores sugeridos: [8080, 3000]      |
> | `COOKIE_KEY`           | Nombre de la cookie key.                                      |
> | `SECRET_KEY`           | Session secret key.                                           |
> | `GITHUB_CLIENT_ID`     | ID de cliente de API de autenticación de Github.              |
> | `GITHUB_SECRET_KEY`    | Clave o secreto de API de autenticación de Github.            |
> | `GITHUB_CALLBACK_URL`  | URL de devolución de llamada de Github.                       |
> | `JWT_SECRET`           | Clave o secreto para JSON Web Token.                          |
> | `JWT_EXPIRES_IN`       | Tiempo de expiración para JSON Web Token en segundos.         |
> | `JWT_ALGORITHM`        | Algoritmo utilizado para JSON Web Token.                      |
> | `NODE_MAILER_USER`     | Usuario de Nodemailer para correo electrónico.                |
> | `NODE_MAILER_PASSWORD` | Contraseña de Nodemailer para correo electrónico.             |
> | `TWILIO_ACCOUNT_SID`   | SID de cuenta de Twilio.                                      |
> | `TWILIO_AUTH_TOKEN`    | Token de autenticación de Twilio.                             |
> | `TWILIO_PHONE_NUMBER`  | Número de teléfono de Twilio.                                 |
> | `STRIPE_PUBLIC_KEY`    | Clave pública de API de Stripe (gestión de pagos).            |
> | `STRIPE_SECRET_KEY`    | Clave o secreto de API de Stripe (gestión de pagos).          |
> | `MONGO_URL_LOCAL`      | URL de conexión a MongoDB para entorno local.                 |
> | `MONGO_URL_ATLAS`      | URL de conexión a MongoDB para entorno de producción (Atlas). |
> | `DB_NAME`              | Nombre de la base de datos en MongoDB.                        |
>
> El proyecto cuenta con un archivo llamado .env.example con todas las definiciones de las variables de entorno para ser customizadas. Luego de completar la información se deben guardar tres archivos con los siguientes nombres:
>
> - .env.development (desarrollo)
> - .env.production (producción)
> - .env.staging
>
> ### Requisitos
>
> Asegúrate de tener los siguientes requisitos instalados en tu entorno de desarrollo:
>
> - Node.js
> - MongoDB
>
> ### Instalación
>
> Sigue estos pasos para instalar y configurar el proyecto:
>
> - Clona este repositorio en tu máquina local:
>
> ```bash
> git clone https://github.com/Andrea-Laurino/proyecto_final_backend_55535.git
> ```
>
> - Instala las dependencias del proyecto ejecutando el siguiente comando:
>
> ```bash
> npm install
> ```
>
> - Configura la conexión a la base de datos MongoDB y todas las variables de entorno.
>
> - Asegúrate de tener MongoDB en ejecución , la URL de conexión correcta y todas las variables de entorno configuradas.
>
> - Inicia la aplicación con el siguiente comando:
>
> ```bash
> npm start
> ```
>
> Esto iniciará el servidor Node.js y estará escuchando en el puerto especificado en el archivo `.env`.
>
> - Accede a la aplicación en tu navegador web ingresando la siguiente URL:
>
> ```
> http://localhost:<PUERTO>
> ```
>
> Asegúrate de reemplazar `<PUERTO>` con el número de puerto especificado en el archivo `.env`.
>
> - Ahora podrás utilizar la vista de Login en la aplicación.
>
> - Puedes iniciar la aplicación en el entorno de desarrollo con el siguiente comando:
>
> ```bash
> npm run dev
> ```

> [!NOTE]
>
> ## Credenciales
>
> ### Admin (role: "admin"):
>
> ##### Email:
>
> ```
> admin@correo.com
> ```
>
> ##### Password:
>
> ```
> 1234
> ```
>
> ### User (role: "user"):
>
> ##### Email:
>
> ```
> user@correo.com
> ```
>
> ##### Password:
>
> ```
> 1234
> ```
>
> ### Premium (role: "premium"):
>
> ##### Email:
>
> ```
> premium@correo.com
> ```
>
> ##### Password:
>
> ```
> 1234
> ```
>
> ## STRIPE
>
> ##### Datos ficticios para simular el pago con tarjeta de crédito:
>
> ##### Card Number:
>
> ```
> 4242424242424242
> ```
>
> ##### MM/YY :
>
> ```
> 1234
> ```
>
> ##### CVC :
>
> ```
> 567
> ```
>
> ##### C.P :
>
> ```
> 89123
> ```

> [!TIP]
>
> ### Configuración del Entorno y Persistencia de datos.
>
> - El servidor se configura utilizando el gestor de comandos Commander para especificar el ambiente de ejecución y el tipo de persistencia.
>
> - Los ejemplos de comandos disponibles son:
>
> ```bash
> node index.js -m development -p MONGO
> ```
>
> ```bash
> node index.js -m production -p MEMORY
> ```
>
> ```bash
> node index.js -m staging -p FILESYSTEM
>
> ```
>
> \* Los comandos se pueden combinar. Tanto las diferentes variables de entorno como las distintas capas de persistencia.
>
> #### Uso Recomendado
>
> Para un funcionamiento completo del sistema, se recomienda utilizar las variables de entorno en modo "development" junto con la capa de persistencia "MONGO".
>
> ```bash
> node index.js -m development -p MONGO
> ```
>
> Es importante tener en las capas de persistencia "MEMORY" y "FILESYSTEM" su funcionalidad es limitada.

> [!NOTE]
>
> ## Testing
>
> #### Mocha + Chai + Supertest
>
> Realización de módulos de testing para el proyecto principal, utilizando los módulos de mocha, chai y supertest.
> Incluye 3 (tres) tests desarrollados para:
>
> - Router de products.
> - Router de carts.
> - Router de sessions.
>
> ##### Comando para ejecutar el test:
>
> ```bash
> npm test
> ```
>
> #### Artillery
>
> - Simulación de registro y logins de usuarios mediante artillery.
>
> <small>Directorio/s de referencia</small>
>
> - `src/components/users/index.js`: Rutas de users.
> - `src/components/users/usersController/usersController.js` : Controlador del método createFakeUser.
> - `src/components/users/usersServices/usersServices.js`: Servicios del método createFakeUser.
>
> - `config.yaml`: Instrucciones de testing de nuestro respectivo flujo de performance con artillery.
>
> - `restPerformance.json`: Archivo donde se guardan los resultados del test en formato json.
>
> #### Comandos para ejecutar el test Artillery:
>
> Para realizar pruebas de rendimiento con Artillery, sigue estos pasos:
>
> - Iniciar la Aplicación:
>
> Ejecuta el siguiente comando en una terminal para iniciar la aplicación. Asegúrate de que la aplicación esté en ejecución antes de ejecutar las pruebas de Artillery.
>
> ```bash
> npm run dev
> ```
>
> - Ejecutar las pruebas con Artillery:
>
> Abre otra terminal y ejecuta el siguiente comando para iniciar las pruebas con Artillery. El archivo de configuración config.yaml se utiliza para definir las especificaciones de las pruebas. Los resultados se guardarán en el archivo restPerformance.json.
>
> ```bash
> npx artillery run config.yaml --output restPerformance.json
> ```
>
> - Resultados de las Pruebas:
>
> Después de ejecutar las pruebas, encontrarás los resultados en el archivo `restPerformance.json`. Puedes analizar este archivo para obtener información detallada sobre el rendimiento de la aplicación durante las pruebas.

##Deploy

#### Enlace al sitio activo

- [Deploy en Railway](https://proyectofinalbackend55535-production.up.railway.app/) (Funcionalidad Front-end básica)
