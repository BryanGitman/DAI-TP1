import {concatInvert, concatOnly} from './manejo-strings.js';

export const EJ01 = () =>
{
    let textoEntrada01 = "Escuela";
    let textoEntrada02 = "ORT";
    let textoSalida;

    textoSalida = concatInvert(textoEntrada01, textoEntrada02);
    console.clear();
    console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
    console.log(`Texto de Salida: "${textoSalida}"`);
}
