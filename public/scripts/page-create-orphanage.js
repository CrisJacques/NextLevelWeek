//Linha copiada do site do LeafLet:
//https://leafletjs.com/examples/quick-start/
//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);//coordenadas obtidas do Google Maps para Rio do Sul, SC
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
})

let marker;//inicializando a variável marker (let permite q seu valor seja mudado)

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icon
    marker && map.removeLayer(marker) //executa o removeLayer se o marker existir (for true)

    // add icon layer 
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

// adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return //para de executar aqui
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){//quando tiver um campo só, aí só limpa o campo, não remove ele
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return //para a execução aqui, não deixa deletar o campo
    }

    //deletar o campo
    span.parentNode.remove()
}

//troca do sim e não (seleção)
function toggleSelect(event){
    //retirar a classe .active dos botões
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a classe .active no botão que foi clicado
    const button = event.currentTarget //pega o botão que foi clicado
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value //pega o valor do atributo "data-value" lá do html (é ."value" porque no html colocamos data-value)

    
}

function validate(event){//esta é função é chamada em onsubmit="validate(event)" lá no form no html
    //validar se lat e lng estão preenchidos - em construção
    /*const needsLatAndLng = true;
    if(needsLatAndLng){
        event.preventDefault();//não envia o formulário quando clica no botão responsável por enviá-lo
        alert('Selecione um ponto no mapa')
    }*/
}