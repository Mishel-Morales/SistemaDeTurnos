const btnAgregarCola = document.querySelector('#btnAgregarCola');
const nombrePaciente = document.querySelector('#exampleFormControlInput1');
const edadPaciente = document.querySelector('#exampleFormControlInput2');
const sintomasPaciente = document.querySelector('#exampleFormControlTextarea1');
const insertarDatosTabla = document.querySelector('#insertarDatos');
const mostrarEdadSintoma = document.querySelector('#mostrarEdadSintoma');
const mostrarNombrePaciente = document.querySelector('#mostrarNombre');
const btnAtenderPaciente = document.querySelector('#atenderSiguientePaciente');
const mostrarProximoTurno = document.querySelector('#exampleFormControlInput3');

let agregar = '';
let paciente;
let tablaVacia = true;
let numeroPaciente = 0;

class NodePaciente{ // Se crea el nodo paciente con los datos proporcionados;
    constructor(nombre, edad, sintomas){
        this.Nombre = nombre;
        this.Edad = `${edad} años`;
        this.SintomaPrincipal = sintomas;
        this.next = null;
    }
}
class Queue{ // Se agrega a la cola;
    #pacientesEspera;
    constructor(){
        this.Primero = null;
        this.Ultimo = null;
        this.#pacientesEspera = '';
        this.length = 0;
    }
    enqueue(nombre, edad, sintoma){ //Agregar un paciente a la cola;

        const paciente = new NodePaciente(nombre, edad, sintoma);
        this.#pacientesEspera += `Nombre del Paciente: ${paciente.Nombre}. Edad del Paciente: ${paciente.Edad} años. Sintoma Principal del Paciente: ${paciente.SintomaPrincipal}. \n`
        
        if(this.length == 0 || tablaVacia==true){
            this.Primero = paciente;
            this.Ultimo = paciente;

        } else{
            this.Ultimo.next = paciente;
            this.Ultimo = paciente;
        }

        this.length++;
        return this;
    }
    dequeue(){ //Eliminar el primer paciente de la cola;

        if(this.length != 1){
            this.Primero = this.Primero.next;

        } else{
            this.Primero = this.Primero.next;
            this.Ultimo = null
        }

        this.length--;
        return this;
    }
    peek(){ // Muestra al primer paciente de la cola;
        return this.Primero;
    }
    isEmpty(val){ // Verifica si no hay pacientes;

        if(this.length != 0 && val != 0){
            return `Hay ${this.length} pacientes`;
        } else{
            return 'No hay pacientes';
        }

    }
    printQueue(){ // Muestra a todos los pacientes en Espera;
        return this.#pacientesEspera;
    }
}

const newPaciente = new Queue();

const crearFila = (nombre, edad, sintomas, numeroPaciente) => {
    return`
    <tr class="fila">
        <th scope="row">${numeroPaciente}</th>
        <td>${nombre}</td>
        <td>${edad} años</td>
        <td>${sintomas}</td>
        <td>01:25 PM</td>
    </tr><span></span>`
}

const agregarPaciente = () => {
    
    newPaciente.enqueue(nombrePaciente.value, edadPaciente.value, sintomasPaciente.value);
    paciente = newPaciente.peek();

    numeroPaciente++;
    
    agregar = crearFila(nombrePaciente.value, edadPaciente.value, sintomasPaciente.value, numeroPaciente);
    insertarDatosTabla.innerHTML += agregar;
    
    paciente = newPaciente.peek();
    mostrarProximoTurno.value = `  Proximo Turno: ${paciente.Nombre}`;

    tablaVacia = false;
    nombrePaciente.value = '';
    edadPaciente.value = '';
    sintomasPaciente.value = '';   
}

const decir = (texto) => { // Para que diga el nombre del paciente en el turno actual;
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES"; 
  window.speechSynthesis.speak(voz);
}

const agregarDatos = () => {

    if(tablaVacia == false){
        mostrarNombrePaciente.textContent = paciente.Nombre;
        mostrarEdadSintoma.textContent = `${paciente.Edad} - ${paciente.SintomaPrincipal}`;
        decir(paciente.Nombre);

    } else{
        mostrarNombrePaciente.textContent = '...';
        mostrarEdadSintoma.textContent = ``;
        paciente = newPaciente.dequeue();
        numeroPaciente = 0;
    }
    
    if(paciente.next != null){
        paciente = newPaciente.dequeue();
        paciente = newPaciente.peek();
        mostrarProximoTurno.value = `  Proximo Turno: ${paciente.Nombre}`;

    } else{
        tablaVacia = true;
        mostrarProximoTurno.value = `  Proximo Turno: ${paciente = newPaciente.isEmpty(0)}`;
    }

    let fila = insertarDatosTabla.querySelector('tr');
    numeroPaciente != 0 ? insertarDatosTabla.removeChild(fila) : null;
}

btnAgregarCola.addEventListener('click', agregarPaciente);
btnAtenderPaciente.addEventListener('click', agregarDatos);

