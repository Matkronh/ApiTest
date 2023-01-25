const hero = document.getElementById("pokedexx")
let idStamp = 1
const idArray = []

async function getApi(url){
    const response = await fetch (url)
    const data = await response.json()
    return data
}

async function displayPokemonIndex(){
    
    const pokemonData = await getApi("https://pokeapi.co/api/v2/pokemon/")

        pokemonData.results.forEach(async pokemon => {
            idStamp = idStamp + 1
            const pokemonDetailData = await getApi(pokemon.url)
            const pokeFrameElement = document.createElement("div")
            pokeFrameElement.setAttribute("id", pokemon.name)
            const pokeNameElement = document.createElement("h2")
            pokeNameElement.textContent = pokemon.name
            const pokeFramePic = document.createElement("img")
            pokeFramePic.src = pokemonDetailData.sprites.other["official-artwork"].front_default
            pokeFrameElement.append(pokeNameElement, pokeFramePic)
            
            //const dependency = idArray.findIndex((value) => value.id === pokemon.name)
            
            hero.append(pokeFrameElement)
            idArray.push(pokemon.name)
            
    })
    
}


displayPokemonIndex()

console.log(idArray)
