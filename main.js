//Busqueda secuencial y binaria 
//1.- Crear una función que encuentre el número más repetido en un array.
//Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]

const arreglo = [3,6,1,8,10,3,9,3,2,5,6].sort();

console.log(arreglo)

for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i+1] === arreglo[i]){
        console.log("El número mas repetido es " + arreglo[i])
    }
}


//2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
//Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]

//Crear una función que busque el número más grande en un arreglo.
//Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
function elementoMayor(numeros){
    if(numeros.length === 0){
        return " El número más grande es";
    }
    const mayor = Math.max(...numeros);
    return "El número más grande es:" + mayor;
}

let numeros = [1,4,7,2,4,1,9,4,0,2,4,5,12]
console.log(elementoMayor(numeros))

//Crear una función que busque el número más pequeño en el arreglo.
//Ejemplo input - > [1,4,5,-1,-7,2,3,9]

function elementoMenor(numeros){
    if(numeros.length === 0){
        return "El número menor es";
    }
    const menor = Math.min(...numeros);
    return "El número menor es:" + menor;
}

let Numeros = [1,4,5,-1,-7,2,3,9]
console.log(elementoMenor(numeros))
//Crear una clase llamada ``Contacto`` con los siguientes datos:
//Nombre
//Apellidos
//Teléfono

class Contacto{
    constructor(nombre, apellidos, telefono){
        this.nombre = nombre; 
        this.apellidos = apellidos; 
        this.telefono = telefono;
    }
}

//Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
//Agregar un contacto.
//Buscar un contacto por nombre.

class ListaContactos{
    constructor(){
        this.contactos =[];
    }

    agregarContacto(contacto){
        this.contactos.push(contacto);
    }

    buscarContactosPorNombre(nombre){
        return this.contactos.find(contacto => contacto.nombre === nombre);
    }
}

const contacto1 = new Contacto("EMILIO", "ORTIZ", "2256789548");
const contacto2 = new Contacto("MISAEL", "CORTEZ", "2288675490");
const contacto3 = new Contacto("ANDRES", "CORDOBA", "2288234556");
const lista = new ListaContactos;

lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);
lista.agregarContacto(contacto3);

const contactoEncontrado = lista.buscarContactosPorNombre("EMILIO");
console.log(contactoEncontrado);


    


