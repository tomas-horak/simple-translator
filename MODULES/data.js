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
export const keys = Object.keys(keyValueForLanguages)

//API call
import { displayTranslation } from "./view.js";
import { showLoader } from "./view.js";

export async function translate (fromLang, toLang, word){
    if(fromLang == toLang){
        displayTranslation(word)
        return
    }
    try {
        showLoader()
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", word);
        encodedParams.append("target", `${keyValueForLanguages[toLang]}`);
        encodedParams.append("source", `${keyValueForLanguages[fromLang]}`);

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
        showLoader()
        displayTranslation(data.data.translations[0].translatedText)
      
       
        

    } catch (error) {
        console.error(error)
        //přidat funkci která zobrazí chybu
    }
}

