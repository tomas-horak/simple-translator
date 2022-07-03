import {displayLanguagesToSelection} from "./view.js"
import { keys } from "./data.js"
import {translate} from "./data.js"
import { showLoader } from "./view.js"

const selectFrom = document.querySelector(".select__from")
const selectTo = document.querySelector(".select__to")
const inputFromUser = document.querySelector(".user-input")
const translateButton = document.querySelector(".button")


//při zmáčkutí "translate" zavolá funkci, která dělá call na API
translateButton.addEventListener("click", event => {
    event.preventDefault()
    translate(selectFrom.value, selectTo.value, inputFromUser.value)
    showLoader()
})


displayLanguagesToSelection(keys, selectFrom, selectTo)
