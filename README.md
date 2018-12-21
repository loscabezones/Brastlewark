# Brastlewark

Aplicación web que mediante una API, que nos devuelve un listado, muestra información sobre nomos. El conjunto de nomos se puede filtrar por características y a través de un buscador. Se puede visualizar el detalle de cada nomo. Todo el contenido de la web es responsive.

## Vistas

  La aplicación está formada por dos vistas (2 páginas de una web). La vista Home y la vista Gnome.
  La página Home es la página de inicio que muestra todos los nomos junto a un buscador y a un filtro.
  La página Gnome muestra en detalle la información del nomo seleccionado en la página Home.
  
  Ejemplo: Página Home
  
  ![Home](/img-documentacion/Home.PNG "Home")
  
  Ejemplo: Página Gnome
  
  ![Gnome](/img-documentacion/Gnome.PNG "Gnome")
  
  Ejemplo: Páginas Mobile.
  
  ![Home](/img-documentacion/Home-Mobile.PNG "Home") ![Gnome](/img-documentacion/Gnome-Mobile.PNG "Gnome")

## Instalación

  Para poder levantar la aplicación localmente, se necesita tener instalado:
  
  * NODE
  * ANGULAR CLI
  
  ### Inicio
  
  Una vez clonado el repositorio, nos dirigimos a la carpeta Brastlewark mediante la consola:
  
  ~~~ 
  > cd Brastlewark/  
  ~~~
  
  Instalamos las dependencias con Node
  
  ~~~
  > npm install
  ~~~
  
  Una vez instaladas todas las dependencias, solo tenemos que levantar la aplicación
  
  ~~~
  > ng serve
  ~~~
  
  por defecto tendremos acceso a la web mediante el puerto 4200
  
  http://localhost:4200
  
  
  ## Características de la aplicación
  
     * Control de errores cuando no podemos obtener datos de la Api
     * Una única llamada a la API para obtener todos los datos
     * Carga dinámica de los elementos en pantalla
     * Buscador 
     * Filtrado por características
     * Animaciones al pasar el raton
     * Animación de carga de datos con un Spinner
     * Transacciones suaves al cargar los elementos
     * Aplicación responsive
     * Muestra de colores dinámicamente segun el valor del color
     * Separación de código en componentes reutilizables
     * Control de rutas
   
   ## Imágenes de la Aplicación
   
   * Control de errores:
   
   ![Gnome](/img-documentacion/errores.PNG "Gnome")
  
   * Animación:
  
   ![Gnome](/img-documentacion/Animacion.PNG "Gnome")
   
   * Colores dinámicos:
  
   ![Gnome](/img-documentacion/Colores.PNG "Gnome")
  
 
