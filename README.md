# ListaEstudiantes

## Version y configuracion

Angular CLI: 13.2.6
Node: 14.18.0
Bootstrap: 4.5.2
ngx-toastr: 14.2.2

## Componentes

Se hizo uso de 2 componentes
1. RegistrarEstudiantes
2. ConsultarEstudiantes

Se hizo uso de la navegacion mediante routing.

## Funcionamiento

Se creo una clase Estudiantes con los atributos: Identificaciones, nombre, nota 1, nota 2, nota 3, promedio y estado.

## Componente registrar

Para el componente de registro se utilizaron formularios reactivos con 5 campos: Identificacion, nombre, nota 1, nota 2, nota 3 y el respectivo boton de registrar.

Todos los campos son requeridos, hasta que no se llenen todos los campos no se habilita el boton de registrar.

Al momento de registrar al estudiante se hizo uso del Toast para mostrar un mensaje de "Registrado correctamente"

Además se añadio un boton "Consultar" para redireccionar al componente consultarEstudiante.

Para el almacenamiento de los datos se hizo uso de LocalStorage.

## Componente consultar

Para el componente de consulta se hizo uso de una tabla con todos los campos respectivos.

- Se hizo uso de la directiva ngFor para recorrer la lista de estudiantes.
- Se hizo uso de la directiva ngIf para que en caso de que no haya registro muestre el respectivo mensaje.
- Se hizo uso de la directiva ngStyle para diferenciar mediante colores el estado del estudiante: Verde para Aprobado, Rojo para Reprobado y Negro para Excluido.

Además se añadio un label para mostrar el ultimo estudiante de la lista utilizando la propiedad Last de la directiva ngFor.

