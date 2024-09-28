const form = document.getElementById("edit-form")
const btn = document.getElementById("edit__btn")
btn.addEventListener("click", editGameForm)

const genreForm = document.getElementById("add-genre-form")
const addGenreBtn = document.getElementById("add-genre-btn")
const deleteGenreForm = document.getElementById("delete-genre-form")
const deleteGenreBtn = document.getElementById("delete-genre-btn")

addGenreBtn.addEventListener("click", addGenreForm)
deleteGenreBtn.addEventListener("click", removeGenreForm)

function editGameForm(){
    if(form.innerText == ""){
        genreForm.innerText = ""
        deleteGenreForm.innerText = ""

        const inputName = document.createElement("input")
        const inputYear = document.createElement("input")
        const labelName = document.createElement("label")
        const labelYear = document.createElement("label")
        const sendBtn = document.createElement("button")
        const br = document.createElement("br")
        const br2 = document.createElement("br")
    
        labelName.innerText = "Novo nome: "
        labelName.htmlFor = "name"
        inputName.name = "name"
        inputName.id = "name"
        labelYear.innerText = "Novo ano: "
        labelYear.htmlFor = "year"
        inputYear.name = "year"
        inputYear.id = "year"
        inputYear.type = "number"
        sendBtn.innerText = "Enviar"
        sendBtn.classList.add("send-btn")
    
        form.append(labelName, inputName, br, labelYear, inputYear, br2, sendBtn)
    }
}

function addGenreForm(){
    if(genreForm.innerText == ""){
        form.innerText = ""
        deleteGenreForm.innerText = ""

        const inputName = document.createElement("input")
        const labelName = document.createElement("label")
        const sendBtn = document.createElement("button")
        const br = document.createElement("br")
    
        labelName.innerText = "Gênero: "
        labelName.htmlFor = "name"
        inputName.name = "genre"
        inputName.id = "name"
        sendBtn.innerText = "Enviar"
        sendBtn.classList.add("send-btn")
    
        genreForm.append(labelName, inputName, br, sendBtn)
    }
}

function removeGenreForm(){
    if(deleteGenreForm.innerText == ""){
        genreForm.innerText = ""
        form.innerText = ""

        const inputName = document.createElement("input")
        const labelName = document.createElement("label")
        const sendBtn = document.createElement("button")
        const br = document.createElement("br")
    
        labelName.innerText = "Gênero: "
        labelName.htmlFor = "name"
        inputName.name = "genre"
        inputName.id = "name"
        sendBtn.innerText = "Enviar"
        sendBtn.classList.add("send-btn")
    
        deleteGenreForm.append(labelName, inputName, br, sendBtn)
    }
}