# Proyecto Blog de viajes  Argentina programa 4.0 
### Tramo III

**Tecnologías usadas** 
Vite (entorno de desarrollo )
FRONT
 - Tailwind (Estilos css basado en clases)
 - daisyUI (Componentes y apoyo de tema (dark mode))
 - ReactJS (Diseño de interfaz visual)
 - Zustand (Manejo de estado global)

 
BACK
 - NodeJS (Entorno JS fuera del navegador
 - Express (Servidor)
 - Axios (fetching de datos front y back)

**El proyecto cuenta con una carpeta frontend y backend cada una debe abrirse de manera independiente en el editor**  
Renombrar el archivo .env.example por .env y setear variables
  
**.env.example => .env Backend**  
PORT = 3000  
MONGO_DB_URI =  Dirección de base de datos mongoDB  
JWT_KEY =  Debe ingresarse una palabra o frase que sera la seed que utliza para encriptar y desencriptar el token  

**.env.example => .env FrontEnd**  
VITE_API_URL = http://localhost:3000/api/ ***no debe cambiarse ya que es la ruta base que utliza para las llamas al endpoint!!!***  

*Debe ejecutarse el comando en cada respectivo editor*  
**npm run install** para instalar las dependencias de cada desarrollo  
**frontend: npm run dev**   para iniciar el front  
**backend : npm run start** para levantar el servidor  
*esto puede cambiarse desde el packjson correspondiente a cada carpeta*  
