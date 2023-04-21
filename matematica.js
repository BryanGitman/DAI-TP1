export const PI = 3.14159265359;

export const promediar = (num1, num2) => (num1+num2)/2;

export const encontrarHipotenusa = (cat1, cat2) => Math.sqrt(cat1*cat1 + cat2*cat2);

export function hacerResolvente(a, b, c)
{
    return [(-b + Math.sqrt(b*b - 4*a*c))/(2*a), (-b - Math.sqrt(b*b - 4*a*c))/(2*a)];
}

export function resolverLogaritmo(base, argumento)
{
    let potencia = 1;
    let exponente = 0;
    while(potencia < argumento)
    {
        potencia = potencia*base;
        exponente++;
    }
    return exponente;
}