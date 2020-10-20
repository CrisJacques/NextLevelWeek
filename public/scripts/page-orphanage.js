const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Linha copiada do site do LeafLet:
//https://leafletjs.com/examples/quick-start/
//create map
const map = L.map('mapid', options).setView([lat, lng], 15);//coordenadas obtidas do Google Maps para Rio do Sul, SC
//const porque a variável não vai mudar durante a execução (se fosse variável dava pra usar var ou let(mais moderno))
//o L vem da biblioteca LeafLet (que inclui mapas)
// setView([latitude longitude], zoom do mapa)

//Linha copiada do site do LeafLet:
//https://leafletjs.com/
//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([lat, lng], {icon}).addTo(map)

/* image gallery */
function selectImage(event){
    const button = event.currentTarget //guardando numa variável quem enviou o evento de click 

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0] //filho do botão do html (que é uma img)
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão que foi clicado
    button.classList.add('active')

}