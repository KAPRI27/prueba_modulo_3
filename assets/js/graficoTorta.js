//CÓDIGO GRÁFICO DE TORTA

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "GRÁFICO DE HABILIDADES",
    },
    data: [
      {
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 51.08, label: "INTELIGENCIA" },
          { y: 27.34, label: "FUERZA" },
          { y: 10.62, label: "VELOCIDAD" },
          { y: 5.02, label: "DURABIIDAD" },
          { y: 4.07, label: "PODER" },
          { y: 1.22, label: "COMBATE" },
        ],
      },
    ],
  });
  chart.render();
};

/*
NO PUDE ENLAZAR LA INFORMACIÓN CON LA API DE HEROES
REVISÉ LA DOCUMENTACIÓN Y TRATÉ DE MOVER LOS TOOLTIPS
PERO AL HACERLO SE PERDÍA TODA LA RENDERIZACIÓN
ASÍ QUE NO INSISTÍ :/

PD: HAY OTRA FORMA DE IR PROBANDO ASÍ COMO LA CONSOLA DE JS??
*/
