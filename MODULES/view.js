const display = document.querySelector(".display")
const loader = document.querySelector(".loader")

//zobrazí jazyky v selectu
export function displayLanguagesToSelection (keys, selectFrom, selectTo) {
    keys.forEach(key => {
    selectFrom.insertAdjacentHTML("beforeend", `<option>${key}</option>`)
    selectTo.insertAdjacentHTML("beforeend", `<option>${key}</option>`)
    })
    }

//zobrazí výstup API callu

export function displayTranslation (word) {
    display.value = word
}

//zobrazí načítání při požadavku na překlad
export function showLoader () {
loader.classList.toggle("loader__active")
}
//zobrazí chybu při špatném API callu
