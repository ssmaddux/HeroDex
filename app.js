// Global variables
let instructionsDiv = document.querySelector('#instructionsdiv')
let searchAndButtonDiv = document.querySelector('#searchandbuttondiv')
let glowingButton = document.querySelector('.glowing-btn')
let inputSearch = document.querySelector('#inputsearch')
const apiKey = '2568348056657128'



//Event listener for click on glowing button.
glowingButton.addEventListener('click', async () => {
    let searchBarReturnValue = inputSearch.value
    console.log(searchBarReturnValue)

    //API call with the text from the search bar injected.
    let response = await axios.get(`https://superheroapi.com/api/${apiKey}/search/${searchBarReturnValue}`)
    console.log(response.data.response)





})