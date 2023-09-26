// Global variables
let bodyDiv = document.getElementById('body')
let instructionsDiv = document.querySelector('#instructionsdiv')
let searchAndButtonDiv = document.querySelector('#searchandbuttondiv')
let glowingButton = document.querySelector('.glowing-btn')
let inputSearch = document.querySelector('#inputsearch')
let photoDiv = document.getElementById('photodiv')
let bioDiv = document.getElementById('biodiv')
let apperanceDiv = document.getElementById('apperancediv')
let weightDiv = document.getElementById('weightdiv')
let powerStatsDiv = document.getElementById('powerstatsdiv')
let workDiv = document.getElementById('workdiv')
let buttonDiv = document.getElementById('buttondiv')
let spaceTimeButton = document.getElementById('spacetimebutton')
const apiKey = '9fe371286bmsh0ed916646153ee4p1f72d4jsnb6ca301a19c9'


// function for verifying return data from the response variable.
function isObject(value) {
    return value !== null && typeof value === 'object';
}

//function to check if a value to be populated to html is an empty value
const isNull = (value) => {
    if(value === "" || value === "-") {
        return " Unknown"
    } else {
        return value
    }
    

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


    
    if(isObject(response.data)) {
        //sets display to none upon successful dearch for super.
         instructionsDiv.style.display = 'none'
        searchAndButtonDiv.style.display = 'none'

        //sets variable for image, sets picture to display
        let imageVariable = response.data.images.md
        photoDiv.innerHTML = `<img src=${imageVariable}>`

        //sets varialbe for name, sets name to screen. checks for empty values
        let bioVariable = response.data.biography.fullName
        let checkedBioVariable = isNull(bioVariable)
        console.log(checkedBioVariable)
        bioDiv.innerHTML = `Full Name: ${checkedBioVariable}`

        //sets variable for height, post it to the div
        let apperanceVariable = response.data.appearance.height[0]
        apperanceDiv.innerHTML = `Height: ${apperanceVariable}`

        //sets var for weight, post it
        let weightVariable = response.data.appearance.weight[0]
        weightDiv.innerHTML = `Weight: ${weightVariable}`

        //sets var for occupation, post it to div. Checks for empty values.
        let workVariable = response.data.work.occupation
        let checkedWorkVariable = isNull(workVariable)
        workDiv.innerHTML = `Occupations: ${checkedWorkVariable}`


        //Because there are multiple properties provided from the API here we have to loop through 
        //looping through the objects properties
        let powerStatsVariable = response.data.powerstats
        for (const key in powerStatsVariable) {
            if (powerStatsVariable.hasOwnProperty(key)) {
                const value = powerStatsVariable[key]

                //creating new element for each key-value pair.
                const statElement = document.createElement('div');
                statElement.innerHTML = `${key}: ${value}`;
                
                //appending the new element to the powerstatsdiv
                powerStatsDiv.appendChild(statElement);
            }
        }


        buttonDiv.style.display = 'flex'
        
        // const backButton = document.createElement('button')
        // backButton.innerText = 'Back'
        // bodyDiv.appendChild(backButton)





    } else {
         alert(`Character ${inputSearch.value} not found`)
    }


    

        


      

      





    

    // //API call with the text from the search bar injected.
    // let response = await axios.get(`https://superhero-search.p.rapidapi.com/api/${apiKey}/search/${searchBarReturnValue}`)
    // console.log(response.data.response)





})