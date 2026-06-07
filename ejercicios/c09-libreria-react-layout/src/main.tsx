import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'    // Aca esta linea seria la q importa el css de bootsrap
import './index.css'   // este es el archivo css clasico que veniamos trabajando en los anteriores trabajos
import App from './App.tsx' // aca hace la conexion con el app donde seria el html de antes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
Esta funcion hace:

document.getElementById('root') --> Busca en el HTML un elemento con id root.

Esto es lo q esta en el index.html

<div id="root"></div>
Ese div está vacío. React lo usa como “contenedor” para meter toda tu página


createRoot(...).render(

createRoot crea la raíz de React y .render() indica qué componente se va a mostrar en pantalla.
Como ahi tenes ese "<App />" va a buscarlo a el app.tsx la funcion app, que justamente es la que muestra las funciones que fuimos haciendo

Esto es lo que hace basicamente este archivo
1. Importa React.
2. Importa Bootstrap.
3. Importa tu CSS.
4. Importa App.
5. Busca el div root del HTML.
6. Mete la aplicación React dentro de ese div.
*/ 

