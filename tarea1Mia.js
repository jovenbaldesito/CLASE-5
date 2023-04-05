//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
function calcularSalarioAnual(salarioMensual) {
    return salarioMensual * 12;
}

document.querySelector('.calcular-salario').onclick = function () {
    const salarioMensual = Number(document.querySelector('.salario-mensual').value);
    const salarioAnual = calcularSalarioAnual(salarioMensual);

    document.querySelector('.salario-anual').value = salarioAnual;

    return false;
}
