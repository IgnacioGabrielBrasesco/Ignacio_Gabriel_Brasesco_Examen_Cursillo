// link de github de este repo
// https://github.com/IgnacioGabrielBrasesco/Ignacio_Gabriel_Brasesco_Examen_Cursillo

// 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

// Teniendo una variable numérica que representa el número de lados de una figura geométrica, 
// mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o 
// "Polígono", según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor a cero.

//Respuesta: 
function figura(cantidad_lados){
    if(cantidad_lados < 0){
        return "Error Elija un numero positivo";
    } else if(cantidad_lados == 0){
        return "La figura geometrica es un Círculo porque tiene " + cantidad_lados + " lados";
    } else if(cantidad_lados == 3){
        return "La figura geometrica es un Triangulo porque tiene " + cantidad_lados + " lados";
    } else if(cantidad_lados == 4){
        return "La figura geometrica es un Cuadrado porque tiene " + cantidad_lados + " lados";
    } else if(cantidad_lados == 5){
        return "La figura geometrica es un Pentagono porque tiene " + cantidad_lados + " lados";
    } else if(cantidad_lados == 6){
        return "La figura geometrica es un Hexágono porque tiene " + cantidad_lados + " lados";
    }
}
console.log(figura(-5));


// 2- Mejorar el ejercicio anterior con manejo de errores:

// Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, 
// verifique que el número de lados sea válido (mayor o igual a cero). Si el número de lados es menor a cero,  
// debe mostrar  un mensaje de error indicando que el número de lados no es correcto.

// Respuesta:
 function figura_geometrica(cantidad_lados){
     switch(cantidad_lados){
         case cantidad_lados < 0: 
             return "Error: Ingrese un numero positivo o 0";
             break;
             case 0: 
             return "La figura geometrica es un Círculo porque tiene " + cantidad_lados + " lados";
             break;
             case 3: 
             return "La figura geometrica es un Triangulo porque tiene " + cantidad_lados + " lados";
             break;
             case 4: 
             return "La figura geometrica es un Cuadrado porque tiene " + cantidad_lados + " lados";
             break;
             case 5: 
             return "La figura geometrica es un Pentagono porque tiene " + cantidad_lados + " lados";
             break;
             case 6: 
             return "La figura geometrica es un Hexágono porque tiene " + cantidad_lados + " lados";
             break;
             default:
                 return "Elija otro numero"

     }
 }

 console.log(figura_geometrica(1))

//  3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

// Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  
// calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes 
// de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, 
// donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
//  (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .

const pi = 3.14159;

function figura_y_perimetro(cantidad_lados, largo){
    let perimetro = cantidad_lados * largo;

    if(cantidad_lados < 0){
        return "Error Elija un numero positivo";
    } else if(cantidad_lados == 0){
        return "La figura geometrica es un Círculo porque tiene " + cantidad_lados + " lados y su perimetro es: " +(2 * pi *largo);
    } else if(cantidad_lados == 3){
        return "La figura geometrica es un Triangulo porque tiene " + cantidad_lados + " lados y su perimetro es: " + perimetro;
    } else if(cantidad_lados == 4){
        return "La figura geometrica es un Cuadrado porque tiene " + cantidad_lados + " lados y su perimetro es: " + perimetro;
    } else if(cantidad_lados == 5){
        return "La figura geometrica es un Pentagono porque tiene " + cantidad_lados + " lados y su perimetro es: " + perimetro;
    } else if(cantidad_lados == 6){
        return "La figura geometrica es un Hexágono porque tiene " + cantidad_lados + " lados y su perimetro es: " + perimetro;
    } else {
        return "Error, elija un numero valido"
    }
}
console.log(figura_y_perimetro(0, 10));