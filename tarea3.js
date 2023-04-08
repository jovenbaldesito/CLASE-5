//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calcular = document.querySelector('#calcular');
$calcular.onclick = function () {
    const $horas = document.querySelectorAll('.horas');
    let resultadoHorasTotales = 0;
    for (let i = 0; i < $horas.length; i++) {
        resultadoHorasTotales += Number($horas[i].value);
    }

    const $minutos = document.querySelectorAll('.minutos');
    let resultadoMinutosTotales = 0;
    for (let i = 0; i < $minutos.length; i++) {
        resultadoMinutosTotales += Number($minutos[i].value);
    }

    const $segundos = document.querySelectorAll('.segundos');
    let resultadoSegundosTotales = 0;
    for (let i = 0; i < $segundos.length; i++) {
        resultadoSegundosTotales += Number($segundos[i].value);
    }

    if (resultadoSegundosTotales / 60 >= 1) {
        resultadoMinutosTotales += parseInt(resultadoSegundosTotales / 60);
        resultadoSegundosTotales = resultadoSegundosTotales % 60;
    }
    if (resultadoMinutosTotales / 60 >= 1) {
        resultadoHorasTotales += parseInt(resultadoMinutosTotales / 60);
        resultadoMinutosTotales = resultadoMinutosTotales % 60;
    }
    document.querySelector(
        "#resultado"
    ).innerHTML = `Tiempo total: ${resultadoHorasTotales} horas, ${resultadoMinutosTotales} minutos, ${resultadoSegundosTotales} segundos`;
}
