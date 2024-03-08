
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const searchTerm = $("#superhero").val().trim();
    if (!searchTerm.match(/^\d+$/)) {
      alert("Por favor, ingresa solo números.");
      return;
    }

    const apiKey = "4905856019427443";
    const apiUrl = `https://superheroapi.com/api.php/${apiKey}/${searchTerm}`;

    // Hacer la petición a la API
    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (response) {
        // Extraer información del héroe
        const heroId = response.id;
        const heroName = response.name;
        const heroIntelligence = response.powerstats.intelligence;
        const heroStrength = response.powerstats.strength;
        const heroSpeed = response.powerstats.speed;
        const heroDurability = response.powerstats.durability;
        const heroPower = response.powerstats.power;
        const heroCombat = response.powerstats.combat;
        const heroImage = response.image.url;

        
        const datosHeroe = (response);
       

        // Mostrar la información en el HTML
        $("#hero_biografia").html(`
        <div id="biografia" class="text-warning bg-dark p-3">
              <h2 class ="text-light ">ID: ${heroId}</h2>
              <h2 class ="text-light" >Nombre: ${heroName}</h2>
              <h3 class = "p-1" >Inteligencia: ${heroIntelligence}</h3>
              <h3 class = "p-1" >Fuerza: ${heroStrength}</h3>
              <h3 class = "p-1" >Velocidad: ${heroSpeed}</h3>
              <h3 class = "p-1" >Durabilidad: ${heroDurability}</h3>
              <h3 class = "p-1" >Poder: ${heroPower}</h3>
              <h3 class = "p-1" >Combate: ${heroCombat}</h3>
              <img class = "p-1" src="${heroImage}" alt="imagen superheroe">
        </div>
              `);

               //contruyendo los item del grafico 

        
       
        //AQUÍ SE MUESTRA EL GRÁFICO DE TORTA CONECTADO A LA API
        var chart = new CanvasJS.Chart("chartContainer", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          exportEnabled: true,
          animationEnabled: true,
          title: {
            text: "GRÁFICO DE HABILIDADES " + heroName,
          },
          data: [
            {
              type: "pie",
              startAngle: 25,
              toolTipContent: "<b>{label}</b>: {y}%",
              showInLegend: "true",
              legendText: "{label}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - ({y})",
              dataPoints: [
                {
                  y: parseFloat(datosHeroe.powerstats.intelligence),
                  label: "INTELIGENCIA",
                },
                { y: parseFloat(datosHeroe.powerstats.strength), label: "FUERZA" },
                { y: parseFloat(datosHeroe.powerstats.speed), label: "VELOCIDAD" },
                { y: parseFloat(datosHeroe.powerstats.durability), label: "DURABIIDAD" },
                { y: parseFloat(datosHeroe.powerstats.power), label: "PODER" },
                { y: parseFloat(datosHeroe.powerstats.combat), label: "COMBATE" },
              ],
            },
          ],
        });
        chart.render();
    }
  })
})
});