//Linha copiada do site do LeafLet:
//https://leafletjs.com/examples/quick-start/
//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15); //coordenadas obtidas do Google Maps para Rio do Sul, SC
//const porque a variável não vai mudar durante a execução (se fosse variável dava pra usar var ou let(mais moderno))
//o L vem da biblioteca LeafLet (que inclui mapas)
// setView([latitude longitude], zoom do mapa)

//Linha copiada do site do LeafLet:
//https://leafletjs.com/
//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {//já desmembrando o objeto orphanage em suas propriedades e passando elas direto como argumento
  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(//para colocar variáveis dentro de strings, tem que usar crase ao invés de aspas simples
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  );

  //Linha copiada do site do LeafLet:
  //https://leafletjs.com/
  //create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {//arrow function (notação bem mais compacta para funções que são argumento de outras funções)
    const orphanage = {//dataset faz parte do objeto html (atributos data-algumacoisa de um elemento html podem ser acessados assim no Javascript: nome_do_elemento_html.dataset.algumacoisa)
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})

