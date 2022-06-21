const button = document.querySelector("#button")
const selection = document.querySelector("#selection")
const inputFromUser = document.querySelector("#user-input")
const translateButton = document.querySelector("#button")

translateButton.addEventListener("click", event => {
    event.preventDefault()
    translate()
    

})


const getLanguages = async () => {
    try {
        const response = await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
            method: "GET",
            headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '2633ec6471msh82ba541ddc331b8p1bb800jsn4765995e724b',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
          } );
        const data = await response.json()
        
        

        data.data.languages.forEach(element => {
            
        selection.insertAdjacentHTML("beforeend", `<option value="${element}">${element.language}</option>`)
    })}catch (error){
        console.error(error)
        //přidat funkci která zobrazí chybu
    }
}


const translate = async () => {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", inputFromUser.value);
        encodedParams.append("target", "es");
        encodedParams.append("source", "en");

        const response = await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2",  {
            method: "POST",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '2633ec6471msh82ba541ddc331b8p1bb800jsn4765995e724b',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
              body: encodedParams}
        );
        
        const data = await response.json()
        console.log(data.data.translations[0].translatedText)
        console.log(selection)

    } catch (error) {
        console.error(error)
        //přidat funkci která zobrazí chybu
    }
}



getLanguages()