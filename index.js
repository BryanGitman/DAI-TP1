import {EJ01} from './inversion.js';
import {PI, promediar, encontrarHipotenusa, hacerResolvente, resolverLogaritmo} from './matematica.js';
import {Alumno} from './alumno.js';
import {copiar} from './filerw.js';

EJ01();

console.log(`El número PI es igual a ${PI}`);
console.log(`El promedio entre 4 y 7 es ${promediar(4,7)}`);
console.log(`La hipotenusa de un triángulo rectangulo de catetos 5 y 4 es igual a ${encontrarHipotenusa(5,4)}`);
console.log(`El conjunto de 0 de la función f(x)=x^2+3x-5 es {${hacerResolvente(1,3,-5)}}`);
console.log(`El logaritmo en base 2 de 8 es igual a ${resolverLogaritmo(2,8)}`);

let alumno1 = new Alumno("lucas1234", 47098765);
let alumno2 = new Alumno("martina5678", 47966465);
alumno1.mostrar();
alumno2.mostrar();

copiar("./entrada.txt", "./salida.txt");
