// Global variables
let instructionsDiv = document.querySelector('#instructionsdiv')
let searchAndButtonDiv = document.querySelector('#searchandbuttondiv')
let glowingButton = document.querySelector('.glowing-btn')
let inputSearch = document.querySelector('#inputsearch')
let photoDiv = document.getElementById('photodiv')
const apiKey = '9fe371286bmsh0ed916646153ee4p1f72d4jsnb6ca301a19c9'


// function for verifying return data from the response variable.
function isObject(value) {
    return value !== null && typeof value === 'object';
}



console.log("working")


//Event listener for click on glowing button.
glowingButton.addEventListener('click', async () => {

    
    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/',
        params: {hero: inputSearch.value},
        headers: {
          'X-RapidAPI-Key': '9fe371286bmsh0ed916646153ee4p1f72d4jsnb6ca301a19c9',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      }
      
    let response = await axios.request(options);
    console.log(response.data);
    // console.log(response.data.name)
    // console.log(response.data.appearance.eyeColor)


    //sets display to none upon successful dearch for super.
    if(isObject(response.data)) {
         instructionsDiv.style.display = 'none'
    searchAndButtonDiv.style.display = 'none'
    } else {
         alert(`Character ${inputSearch.value} not found`)
    }

    let imageVariable = response.data.images.md
    photoDiv.innerHTML = `<img src=${imageVariable}>`
    

        


      

      





    

    // //API call with the text from the search bar injected.
    // let response = await axios.get(`https://superhero-search.p.rapidapi.com/api/${apiKey}/search/${searchBarReturnValue}`)
    // console.log(response.data.response)





})