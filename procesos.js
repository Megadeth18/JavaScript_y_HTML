let procesos = [];   // arreglo donde se almacenaran los procesos
let contNumProcesos = 0;
/*
   Tiene como funcion agregar una estructura html para las entradas de procesos mediante etiquetas
   textarea, alternando los colores de cada division
*/
function agregarProceso(){
    contNumProcesos += 1;
    let idProceso= document.getElementById("procesos");
    let elemento = document.createElement("div");
    elemento.innerHTML = `<div class="${contNumProcesos % 2 ? "color-coral" : "color-khaki"}">
                             <p>Proceso ${contNumProcesos}</p>
                             <textarea class="textarea"></textarea>
                            </div>`;
    idProceso.appendChild( elemento );
}
  /*Funcion que crea e inicializa procesos y almacena procesos en el arreglo procesos.*/
  function crearProceso(){
    let idEntradasProcesos = document.getElementById("procesos").getElementsByTagName("textarea");
      // recorre de 0 hasta el numero de textarea's creados
      for( let i = 0; i < idEntradasProcesos.length; i++ ){
          procesos.push({
              nombre: idEntradasProcesos[ i ] = `Proceso ${(i+1)}`,
              codigo: idEntradasProcesos[ i ].value.split("\n"),
              estado: "activo",
          });
      }
  }
   /*
      Funcion que mostra el contenido del arreglo de procesos de acuerdo al numero de procesos creados
      y al contenido de los arreglos codigo de cada proceso
   */
     function generarSimulacion(){
         crearProceso(); // iniciar los procesos
         let idMostrados = document.getElementById("mostrar");
         idMostrados.value ="";
         let terminados = 0;
          for( let i = 0;  ; i++ ){
              for( let j = 0; j < procesos.length; j++ ){
                  if( procesos[ j ].codigo[ i ] != undefined ){
                      idMostrados.value += "Proceso: " + procesos[ j ].nombre + "\n";
                      idMostrados.value += "Linea de codigo: " + procesos[ j ].codigo[ i ] + "\n";
                   } else if( procesos[ j ].estado == "activo" ){
                       idMostrados.value += procesos[ j ].nombre + " Terminado" + "\n";
                       procesos[ j ].estado = "inactivo";
                       terminados += 1;
                  }
                }
                  if( terminados == procesos.length )
                             break;
             }
     }
