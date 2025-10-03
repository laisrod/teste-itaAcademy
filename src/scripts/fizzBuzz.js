/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 

export function fizzBuzz (number) {
    try {
        if (typeof number !== 'number' || isNaN(number)) {
            return {
                status: "error",
                message: "No es un número válido",
                data: {
                    input: number,
                    output: null
                }
            };
        }

        if (number % 3 === 0 && number % 5 === 0) {
            return {
                status: "ok",
                message: "El número es divisible por 3 y 5",
                data: {
                    input: number,
                    output: "FizzBuzz"
                }
            };
        }
        
        if (number % 3 === 0) {
            return {
                status: "ok",
                message: "El número es divisible por 3",
                data: {
                    input: number,
                    output: "Fizz"
                }
            };
        }
        
        if (number % 5 === 0) {
            return {
                status: "ok",
                message: "El número es divisible por 5",
                data: {
                    input: number,
                    output: "Buzz"
                }
            };
        }

        return {
            status: "ok",
            message: "El número no es divisible por 3 ni 5",
            data: {
                input: number,
                output: number.toString()
            }
        };

    } catch (error) {
        return {
            status: "error",
            message: "Error inesperado: " + error.message,
            data: {
                input: number,
                output: null
            }
        };
    }
}