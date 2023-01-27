const hero = document.getElementById("pokedexx")
const idArray = []
const idOne = document.getElementById("div-1")
const divNext = document.getElementById("div-next")
const divLast = document.getElementById("div-last")
const divName = document.getElementById("div-name")
const searchNameInput = document.getElementById("search-name-input")
const searchNumberInput = document.getElementById("search-number-input")
const searchNameButton = document.getElementById("search-name-btn")
const searchNumberButton = document.getElementById("search-number-btn")

let pokemonNumber = [1,2,3,4,5,6,7,8,9,10]
let clickNumber = 0

async function getApi(url){
    const response = await fetch (url)
    const data = await response.json()
    return data
}

/* Rendering of pokemon + image, stats, name */

async function displayPokemonIndex(){
    

    const pokemonData = await getApi(`https://pokeapi.co/api/v2/pokemon/?offset=${clickNumber}&limit=1`)
    

        pokemonData.results.forEach(async pokemon => {
            const pokemonDetailData = await getApi(pokemon.url)

            
            const pokeFrameElement = document.createElement("div")
            pokeFrameElement.className = ("deleteMe")

            /* Text Editing */
            const pokeNameText = document.createElement("h2")
            const pokeUpper = pokemon.name
            const pokeUpper2 = pokeUpper.charAt(0).toUpperCase() + pokeUpper.slice(1);
            const pokeUpper3 = pokeUpper2
            pokeNameText.textContent = pokeUpper3
            pokeNameText.className = ("deleteMe")

            const pokeFramePic = document.createElement("img")
            pokeFramePic.src = pokemonDetailData.sprites.other["official-artwork"].front_default
            pokeFramePic.setAttribute("class", "pokemon-profile")
            pokeFramePic.setAttribute("id", "delete")

            /* STATS */

            const pokeHp = document.createElement("h3")
            pokeHp.textContent = ("HP")
            pokeHp.className = ("deleteMe")
            const pokeAtk = document.createElement("h3")
            pokeAtk.textContent = ("ATK")
            pokeAtk.className = ("deleteMe")
            const pokeDef = document.createElement("h3")
            pokeDef.textContent = ("DEF")
            pokeDef.className = ("deleteMe")
            const pokeSpcAtk = document.createElement("h3")
            pokeSpcAtk.textContent = (" S.ATK")
            pokeSpcAtk.className = ("deleteMe")
            const pokeSpcDef = document.createElement("h3")
            pokeSpcDef.textContent = (" S.DEF")
            pokeSpcDef.className = ("deleteMe")
            
            document.getElementById("div-hp").append(pokeHp)
            document.getElementById("div-atk").append(pokeAtk)
            document.getElementById("div-def").append(pokeDef)
            document.getElementById("div-spcatk").append(pokeSpcAtk)
            document.getElementById("div-spcdef").append(pokeSpcDef)


            const pokeIHp = document.createElement("h3")
            pokeIHp.textContent = (pokemonDetailData.stats["0"].base_stat)
            pokeIHp.className = ("deleteMe")
            const pokeIAtk = document.createElement("h3")
            pokeIAtk.textContent = (pokemonDetailData.stats["1"].base_stat)
            pokeIAtk.className = ("deleteMe")
            const pokeIDef = document.createElement("h3")
            pokeIDef.textContent = (pokemonDetailData.stats["2"].base_stat)
            pokeIDef.className = ("deleteMe")
            const pokeISpcAtk = document.createElement("h3")
            pokeISpcAtk.textContent = (pokemonDetailData.stats["3"].base_stat)
            pokeISpcAtk.className = ("deleteMe")
            const pokeISpcDef = document.createElement("h3")
            pokeISpcDef.textContent = (pokemonDetailData.stats["4"].base_stat)
            pokeISpcDef.className = ("deleteMe")

            document.getElementById("div-i-hp").append(pokeIHp)
            document.getElementById("div-i-atk").append(pokeIAtk)
            document.getElementById("div-i-def").append(pokeIDef)
            document.getElementById("div-i-spcatk").append(pokeISpcAtk)
            document.getElementById("div-i-spcdef").append(pokeISpcDef)

        

            
            idOne.append(pokeFramePic)  
            divName.append(pokeNameText)
            hero.append(pokeFrameElement)
            idArray.push(pokemon.name)


    })
    
}




/* Extensive search function that works on pokemon number and name (name must be specific) */

pokemonNumberId = 1
async function displayFullPokemonIndex(){

const pokemonFullData = await getApi (`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
        const pokemonNameId = []
        
    pokemonFullData.results.forEach(async pokemon =>{
        pokemonNameId.push({
            name: pokemon.name,
            id: pokemonNumberId++
        })
    })


searchNumberButton.addEventListener("click", function(){

    let searchNumberInputElement = searchNumberInput.value

    for (let i = 0; i<pokemonNameId.length; i++){
        if (i == searchNumberInputElement){
            clickNumber = searchNumberInputElement
            displayPokemonIndex()
            console.log("fck")
            removeElementsByClassName("deleteMe")
            document.getElementById("delete").remove()
                    }
                }
                
            })

searchNameButton.addEventListener("click", function(){

    let searchNameInputElement = searchNameInput.value
               
                
        for (names of pokemonNameId){
            if (names.name === searchNameInputElement){
                clickNumber = names.id - 1
                displayPokemonIndex()
                removeElementsByClassName("deleteMe")
                document.getElementById("delete").remove()
                    }
                }               
    })
}

displayPokemonIndex()
displayFullPokemonIndex()

/* Next / Previous Buttons  */

divNext.addEventListener("click", nextTest);
divLast.addEventListener("click", lastTest);

function nextTest(pokeFramePic){
    clickNumber++
    removeElementsByClassName("deleteMe")
    document.getElementById("delete").remove()
    displayPokemonIndex()
    console.log(clickNumber)
}

function lastTest(){
    if (clickNumber === 0){
        console.log("error")
    } else if (clickNumber > 0)
    clickNumber--
    removeElementsByClassName("deleteMe")
    document.getElementById("delete").remove()
    displayPokemonIndex()
    console.log(clickNumber)  
}

/* Utility function to clean up when next pokemon is rendered */

function removeElementsByClassName(className){
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }
}



/* TO DO:  
1. Search field bottom right to search for specific pokemon number or name - CHECK
2. types next to name
3. sounds?
4. change pokedex color scheme button
5. close/open pokedex animation?
6.
7.
*/