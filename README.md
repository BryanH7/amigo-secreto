<h1>Challenge Amigo Secreto Oracle Next Education 2025.</h1>

- Estado del proyecto: Terminado.

Enlace y visualizacion del proyecto publicado en GitHub Pages: https://bryanh7.github.io/amigo-secreto/

Codigo creado por: Bryan Manuel Ham Lopez, alumno Alura Latam OracleOne

<h2>Requisitos para iniciar.</h2>

Es importante identificar las tecnologias necesarias para programar, remplazar y versionar.

- Visual Studio Code con version actualizada
- Navegador Web, de preferencia google chrome
- Cuenta GitHub y conocimientos basicos de terminal Linux ya que Git se basa en comandos Linux

<h2>Descripción, caracteristicas y presentación del proyecto</h2>

El proyecto del amigo secreto, esta caracterizado y creado en su estructura básica en las tres tecnologías asociadas al desarrollo web y a la lógica de programación; HTML5, CSS3 y  JavaScript. El proyecto se creo desde su visualización en Trello hasta su análisis algorítmico e interpretación mediante la lógica de JavaScript aplicada a la manipulación del DOM prediseñado anteriormente. También, el estudio y visualización de los estilos en cascada de CSS3 permitieron analizar cuidadosamente mejoras en este proyecto, cambio de estilos de colores, fuente, imágenes, botones etc. 

Por lo tanto, el proyecto en si fue determinado con muchas modificaciones enfocado a un juego con una visualización llena de misterio por descubrir aquel amigo secreto del que se sortea.

### Característica del código JavaScript.

El código del proyecto Amigo Secreto esta estructurado en tres funciones básicas y fundamentales en unión de los Tags del HTML5, dichas funciones son:
- ```function agregarAmigo()```
- ```function sortearAmigo()```
- ```function reiniciarJuego()```

### Función ```function agregarAmigo()```

Esta función, permite el inicio de todo el programa, desde un inicio, se declara una variable llamada ```let listaDeAmigos = []```, esta variable declara una lista vacia preparada para incluir todos los nombres de las personas mediante la funcion "push" y sorteo de amigos con "Math" (se explicara mas adelante).

La funcion ```function reiniciarJuego()```permite establecer el siguiente bloque de algoritmo escrito en código JavaScript:

Fragmento de codigo HTML empleado en esta funcion:

```
<button id = "amigoListaMostrar" class="button-add" onclick="agregarAmigo()">Añadir</button>

```

```
let listaDeAmigos = [];

function agregarAmigo() {
    let ingresarNombre = document.querySelector("input");
    let nombre = ingresarNombre.value;
    
    if (nombre === "") {
        alert("Por favor, inserta a un amigo.");
        return;
    } 
    
    listaDeAmigos.push(nombre);
    ingresarNombre.value = "";
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of listaDeAmigos) {
        let amigosSeleccionados = document.createElement("li");
        amigosSeleccionados.textContent = amigo;
        lista.appendChild(amigosSeleccionados);
    }
}
 
```
#### Descripción del código..
- El codigo inicia con la declaración de la variable ```listaDeAmigos = []```, para que posteriormente, al crear la función ```function agregarAmigo()``` se declaran nuevas variables llamadas ```ingresarNombre``` que selecciona el Tag "input" del DOM y la variable ```nombre``` que permite crear una nueva variable de la variable declarada anteriormente asignandole un valor en si con la extensión ```.value```.
- Para verficar si la celda de entrada de datos se encuentra vacia, esto si por alguna razón el usuario descuida en ingresar un valor vacio, se define una sentencia de descion indicando si dicho valor es nulo (null) o vacio imprimimos un ``àlert()``` para indicar al usuario mediante advertencia que indica el no ingreso de un amigo.
- El siguiente fragmento de codigo, indica el ingreso de los datos a la lista vacia declarada anteriormente ```listaDeAmigos = []``` con el metodo ```.push```, dicho fragmento de codigo ```listaDeAmigos.push(nombre);``` indica el ingreso y "empuje" de los datos de la variable declara ```nombre``` a la variable ```listaDeAmigos``` que contiene la lista vacia, al momento de ingresar dicho dato, en automatico la celda se limpia con la declaración de un valor vacio en la variable ```ingresarNombre``` como se muestra a continuacion ```ingresarNombre.value = "";```, se crea una nueva varible  llamada ```lista``` seleccionando el Id de "listaAmigos" y despues instertar y dejarndo espacio entre los nombres asignados y el contenido.
- Por ultimo, declaramos un ciclo ```for``` delcarando lo siguiente; para cada amigo (```let amigo```) de la lista de amigos creada (```listaDeAmigos```) se crea una nueva variable llamada amigosSeleccionados y crea un nuevo elemento de tipo ```<li>``` con la estancia ```.createElement()```, por consiguiente dicha variable que creamos dentro del ciclo ```for```, agregamos la estancia ```.textContent = amigo;```, que inserta el elemento de la variable ```amigo```, declarada posteriormente, es decir, imprime en el DOM de la pagina el texto puro de la variable ```amigo```, y por ultimo, dicha variable declarada ```lista``` agregamos un metodo llamado ```.appendChild(amigosSeleccionados)``` para insertar un nuevo Tag en el documendo DOM.

Referencias:
- Enlace: https://developer.mozilla.org/es/docs/Web/API/Document/createElement
- Enlace: https://medium.com/winkhostinglatam/javascript-cu%C3%A1l-es-la-diferencia-entre-textcontent-innertext-y-innerhtml-283dacfc4fe4

### Función ```function sortearAmigo()```

Esta función permite hacer el sorteo de dichos amigos, esta función selecciona un número al azar, ese mismo número es el número de la posición del elemento de la lista creada por el usuario.

Fragmento de codigo HTML empleado en esta funcion:

```
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
```

```
function sortearAmigo() {
    if (listaDeAmigos.length <= 2) {
        alert("Ingresa al menos dos de tus amigos.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoGanador = listaDeAmigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo/a seleccionado es: ${amigoGanador}</li>`;
}

```

#### Descripción del código.
- Al iniciar la función ```sortearAmigo()```, iniciamos con una condicional que identifique un evento, la condicional descrita en el código indica un valor verdadero si la longitud de la lista de los amigos del usuario es mayor a dos, es decir, la cantidad de elementos de la lista determina la cantidad de amigos que no debe de ingresar esto por que puede afectar el sorteo con pocos integrantes.
- Creamos una nueva variable llamada ```indiceAleatorio```, sera aquella variable que con el metodo ``` Math.floor``` que devuelve el maximo entero de un numero especifico y junto con el metodo ```Math.random() * listaDeAmigos.length ``` que indica lo siguiente; el "tamaño" de la lista sera clave para que aleatoriamente seleccione un número dentro de la lista creada por el usuario. Despues de creamos otra nueva variable llamada ```amigoGanador``` que sera la variable que determine el indice de la lista creada, es decir, ```listaDeAmigos[indiceAleatorio]``` (en los lenguajes de programacion, para seleccionar elementos de un arreglo o lista se selecciona primero el nombre de la lista y despues la posicion del elemento); en este caso el ``ÌndiceAleatorio``` sera el numero al azar que determinara la posicon de los amigos de la lista.
- Por ultimo se imprime el resultado con comillas invetidas.
  
NOTA: Se consulto a ChatGPT sobre una nueva forma de imprimir mediante comillas invettidas un Tag entero, lo que resulto en esto: ```resultado.innerHTML = `<li>Tu amigo/a seleccionado es: ${amigoGanador}</li>`;```

Referencias.
- Enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
- Enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

### Función ```function reiniciarJuego()```

Esta ultima función tiene como objetivo reiniciar el juego, esta función tiene el mismo efecto de recargar la pagina web desde el navegador o con la tecla F5.


Fragmento de codigo HTML empleado en esta funcion:


```
<button class="button-init" onclick="reiniciarJuego()">
                    Reiniciar
                </button>
```

```
function reiniciarJuego(){
    
    alert("¿Desea reiniciar el juego ahora?");
    location.reload();
    return;

}

```
#### Descripción del código.

- Se inserto un ```alert()``` para preguntar al usuario si esta seguro de reiniciar el juego.
- Se investigo sobre algun metodo de reinicio de la pagina web, el uso mas recomendado y sencillo es ```location.reload(); ``` es un metodo que conecta con la API web para recargar la pagina.

Referencias:
- Enlace: https://developer.mozilla.org/es/docs/Web/API/Location/reload

<h2>Instrucciones de uso.</h2>

El juego del Amigo Secreto es un juego que permite adivinar cualquier amigo sin importar cuantos amigos jueguen. a continuación se presentan las instrucciones.

1. Ingrese al amigo que queira sortear, recuerde que si no eixste ningún dato en la celda, el juego no puede continuar.


   ![Imagen de WhatsApp 2025-03-15 a las 17 57 41_d2c58c9b](https://github.com/user-attachments/assets/960dce69-8332-4d51-9e6c-aad0e54afda5)

2. Digite todos los numeros que usted desee sortear y despues seleccione "sortear amigo".

   ![Imagen de WhatsApp 2025-03-15 a las 17 58 19_3cacead7](https://github.com/user-attachments/assets/67212bdd-5ace-4255-a834-6440dd1dd7be)

3. Al terminar el sorteo, puede reiniciar la pagina si usted lo desea con el boton "Reiniciar".

   ![Imagen de WhatsApp 2025-03-15 a las 17 59 00_20b7e433](https://github.com/user-attachments/assets/94caa2c7-379c-44b2-a562-4e09f5e35843)

### Errores comunes al codificar.

- No identificar bien el algoritmo empleado provoca que existan muchos errores al estar programando.
- No es recomendable realizar sentencias de decisión con funciones.
- No respaldar el código puede llevar a la perdida permanente del mismo.


  




