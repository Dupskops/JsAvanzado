/*Agregar 10 actividades diarias a realizar y luego que visualice las
que se completaron y quedaron pendientes utilizando objetos,
arreglos y funciones*/

// Objeto para una tarea
let tarea = {
    descripcion: "Estudiar JavaScript",
    completado: false,
    completar: function() {
        this.completado = true;
    }
};

// Arreglo de tareas con el método completar en cada tarea
let tareas = [
    tarea,
    {
        descripcion: "Hacer ejercicio",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Manejar Moto",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Jugar en la PC",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Estudiar JavaScript",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Asistir a la reunión de trabajo",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Almorzar",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Aprobar JavaScript",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Hacer tareas del hogar",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    },
    {
        descripcion: "Ir a dormir a tiempo",
        completado: false,
        completar: function() {
            this.completado = true;
        }
    }
];

function mostrarTareas(tareas, idTabla) {
    const tabla = document.getElementById(idTabla).getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; 
    tareas.forEach((tarea, index) => {
        let fila = tabla.insertRow();
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        celda1.textContent = index + 1;
        celda2.textContent = tarea.descripcion;
    });
}


function marcarComoCompletado(tareas, index) {
    if (tareas[index]) {
        tareas[index].completar();
    }
}


function actualizarTablas() {
    let tareasPendientes = tareas.filter(tarea => !tarea.completado);
    let tareasCompletadas = tareas.filter(tarea => tarea.completado);

    mostrarTareas(tareas, 'iniciales');
    mostrarTareas(tareasPendientes, 'pendientes');
    mostrarTareas(tareasCompletadas, 'completadas');
}

// Marcar algunas tareas como completadas
marcarComoCompletado(tareas, 0);
marcarComoCompletado(tareas, 1);
marcarComoCompletado(tareas, 5);
marcarComoCompletado(tareas, 7);
marcarComoCompletado(tareas, 8);
marcarComoCompletado(tareas, 2);
// Mostrar tareas iniciales y actualizadas en tablas
actualizarTablas();