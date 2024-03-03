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

        // Mostrar la información en el HTML
        $("#hero_biografia").html(`
              <h2>ID: ${heroId}</h2>
              <h2>Nombre: ${heroName}</h2>
              <p>Inteligencia: ${heroIntelligence}</p>
              <p>Fuerza: ${heroStrength}</p>
              <p>Velocidad: ${heroSpeed}</p>
              <p>Durabilidad: ${heroDurability}</p>
              <p>Poder: ${heroPower}</p>
              <p>Combate: ${heroCombat}</p>
            `);
      },
    });
  });
});
