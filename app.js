// Global variables
let playPausebttn = document.getElementById('musicbutton')
let mpThree = document.getElementById('mp3')
let bodyDiv = document.getElementById('body')
let instructionsDiv = document.querySelector('#instructionsdiv')
let searchAndButtonDiv = document.querySelector('#searchandbuttondiv')
let glowingButton = document.querySelector('.glowing-btn')
let inputSearch = document.querySelector('#inputsearch')
let nameHtwo = document.getElementById('nameh2')
let photoDiv = document.getElementById('photodiv')
let allStatsDiv = document.getElementById('allstatsdiv')
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

// playPausebttn.addEventListener('click', async () => {
//     if(mpThree.play()) {
//         mpThree.pause()
//         playPausebttn.innerText = 'Play'
//     } else if (mpThree.pause()) {
//         mpThree.play()
//         playPausebttn.innerText = 'Pause'
//     }

    
// })


function togglePlayPause() {
    if (mpThree.paused) {
        mpThree.play();
        playPausebttn.innerHTML = 'pause';
    } else {
        mpThree.pause();
        playPausebttn.innerHTML = 'play';
    }
}

// Add a click event listener to the play/pause button
playPausebttn.addEventListener('click', togglePlayPause);

console.log("working")


//Event listener for click on glowing button.
glowingButton.addEventListener('click', async () => {

    
    const inputValue = inputSearch.value.trim(); // Trim whitespace from the input
    if (!inputValue) {
        alert("Please input a super name");
        return; // Exit the function if the input is empty
    }

    // API call
    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/',
        params: {hero: inputSearch.value},
        headers: {
          'X-RapidAPI-Key': '9fe371286bmsh0ed916646153ee4p1f72d4jsnb6ca301a19c9',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      }
    
    // defining the response to use   
    let response = await axios.request(options);
    console.log(response.data);

      
    


    
    if(isObject(response.data)) {
        //sets display to none upon successful search for super.
        instructionsDiv.style.display = 'none'
        searchAndButtonDiv.style.display = 'none'
        allStatsDiv.style.display = 'block'

        //populating name at top of photo
        let nameVariable = response.data.name
        nameHtwo.innerHTML = nameVariable

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

        //Deleting old stats before adding.
        while (powerStatsDiv.firstChild) {
            powerStatsDiv.removeChild(powerStatsDiv.firstChild);
        }
        
        //Because there are multiple properties provided from the API here we have to loop through 
        //looping through the objects properties
        let powerStatsVariable = response.data.powerstats
        for (const key in powerStatsVariable) {
            if (powerStatsVariable.hasOwnProperty(key)) {
                const value = powerStatsVariable[key]

                //creating new element for each key-value pair.
                const statElement = document.createElement('div');
                statElement.setAttribute("class", "innerpowerstatsdiv")
                // statElement.setAttribute("width", "100%")
                statElement.innerHTML = `${key}: ${value}`;
                
                //appending the new element to the powerstatsdiv
                powerStatsDiv.appendChild(statElement);
            }
        }

    
        //Displaying the back button
        buttonDiv.style.display = 'flex'

    } else {
         alert(`Character ${inputSearch.value} not found`)
    }

})


//Adding functionality to back button, displays instructions and searchbar for continued searching.
spaceTimeButton.addEventListener('click', () => {
    allStatsDiv.style.display = 'none'
    instructionsDiv.style.display = 'flex'
    searchAndButtonDiv.style.display = 'flex'  

})