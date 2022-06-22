const button = document.querySelector("#button")
const selectFrom = document.querySelector("#selectFrom")
const selectTo = document.querySelector("#selectTo")
const inputFromUser = document.querySelector("#user-input")
const translateButton = document.querySelector("#button")
const displayTranslation = document.querySelector("#display")

//objekt co drží jazyky a jejich zkratky
const keyValueForLanguages = {
English: "en",
German: "de",
Spanish: "es",
Czech: "cs",
Danish: "da",
French: "fr",
Vietnamese: "vi",
Polish: "pl"
}
//pole jazyků 
const keys = Object.keys(keyValueForLanguages)

//zobrazí jazyky v selectu
const displayLanguagesToSelection = (keys) => {
    keys.forEach(key => {
    selectFrom.insertAdjacentHTML("beforeend", `<option>${key}</option>`)
    selectTo.insertAdjacentHTML("beforeend", `<option>${key}</option>`)
})
}

//při zmáčkutí "translate" zavolá funkci, která dělá call na API
translateButton.addEventListener("click", event => {
    event.preventDefault()
    translate()
})

const translate = async () => {
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", inputFromUser.value);
        encodedParams.append("target", `${keyValueForLanguages[selectTo.value]}`);
        encodedParams.append("source", `${keyValueForLanguages[selectFrom.value]}`);

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
       displayTranslation.value = data.data.translations[0].translatedText
        

    } catch (error) {
        console.error(error)
        //přidat funkci která zobrazí chybu
    }
}


displayLanguagesToSelection(keys)
