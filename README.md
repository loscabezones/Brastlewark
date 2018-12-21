# Brastlewark

Aplicación web que mediante una API, que nos devuelve un listado de nomos, muestra información de estos nomos. El conjunto de nomos se puede filtrar por características y a través de un buscador. Se puede visualizar el detalle de cada nomo. Todo el contenido de la web es responsive.

## Vistas

  La aplicación está formada por dos vistas (2 páginas de una web). La vista Home y la vista Gnome.
  La página Home es la página de inicio que muestra todos los nomos junto a un buscador y a un filtro.
  La página Gnome muestra en detalle la información del nomo seleccionado en la página Home.
  
  Ejemplo: Página Home
  
  ![Home](/img-documentacion/Home.PNG "Home")
  
  Ejemplo: Pagina Gnome
  
  ![Gnome](/img-documentacion/Gnome.PNG "Gnome")
  
  Ejemplo: Paginas Mobile.
  
  ![Home](/img-documentacion/Home-Mobile.PNG "Home") ![Gnome](/img-documentacion/Gnome-Mobile.PNG "Gnome")

## Instalacíon

  Para poder levantar la aplicacíon localmente, se necesita tener instalado:
  
  * NODE
  * ANGULAR CLI
  
  ### Inicio
  
  Una vez clonado el repositorio, nos dirigmos a la carpeta Brastlewark mediante la consola:
  
  ~~~ 
  > cd Brastlewark/  
  ~~~
  
  Instalamos la dependencias con Node
  
  ~~~
  > npm install
  ~~~
  
  Una vez instalada todas las dependencias, solo tenemos que levantar la aplicacíon
  
  ~~~
  > ng serve
  ~~~
  
  por defecto tendremos acceso a la web mediante el puerto 4200
  
  http://localhost:4200
  
  
  ## Carasteristicas de la aplicacíon
  
     * Control de errores cuando no podemos obtener datos de la Api
     * Una unica llamada a la API para obtener todos los datos
     * Carga dinamica de los elementos en pantalla
     * Buscador 
     * Filtrado por caracteristicas
     * Animaciones al pasar el raton
     * Animación de carga de datos con un Spiner
     * Transacciones suabes al cargar los elementos
     * Aplicación responsive
     * Muestra de colores dinamicamente segun el valor del color
     * Separacion de codigo en componentes reutilizables
     * Control de rutas
   
   ## Imagenes de la Aplicación
   
   Control de errores:
   
  ![Gnome](/img-documentacion/Gnome.PNG "Gnome")
