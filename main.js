let textArea = document.querySelector("#textArea")

let textBold = document.querySelector("#textBold")
let textItalic = document.querySelector("#textItalic")
let textUnderline = document.querySelector("#textUnderline")
let textCopy = document.querySelector("#textCopy")
let textCut = document.querySelector("#textCut")

let textBoldBtn = document.querySelector("#textBoldBtn")
let isBold = false
let textItalicBtn = document.querySelector("#textItalicBtn")
let isItalic = false
let textUnderlineBtn = document.querySelector("#textUnderlineBtn")
let isUnderline = false
let textCopyBtn = document.querySelector("#textCopyBtn")
let textCutBtn = document.querySelector("#textCutBtn")

let userSelect = window.getSelection()

textBoldBtn.addEventListener('click', () => {
    isBold = true

    if (textBoldBtn.style.backgroundColor == "" || textBoldBtn.style.backgroundColor == "transparent") {
        textBoldBtn.style.backgroundColor = "#BB86FC"
        textBoldBtn.style.color = "black"
        document.execCommand('bold');
    }

    else {
        textBoldBtn.style.backgroundColor = "transparent"
        textBoldBtn.style.color = "#BB86FC"
        document.execCommand('bold');
    }
})

textItalicBtn.addEventListener('click', () => {
    isItalic = true

    if (textItalicBtn.style.backgroundColor == "" || textItalicBtn.style.backgroundColor == "transparent") {
        textItalicBtn.style.backgroundColor = "#BB86FC"
        textItalicBtn.style.color = "black"
        document.execCommand('italic');

    }

    else {
        textItalicBtn.style.backgroundColor = "transparent"
        textItalicBtn.style.color = "#BB86FC"
        document.execCommand('italic');

    }
})

textUnderlineBtn.addEventListener('click', () => {
    isUnderline = true

    if (textUnderlineBtn.style.backgroundColor == "" || textUnderlineBtn.style.backgroundColor == "transparent") {
        textUnderlineBtn.style.backgroundColor = "#BB86FC"
        textUnderlineBtn.style.color = "black"
        document.execCommand('underline');

    }

    else {
        textUnderlineBtn.style.backgroundColor = "transparent"
        textUnderlineBtn.style.color = "#BB86FC"
        document.execCommand('underline');
    }
})

textCopyBtn.addEventListener('click', () => {
    let textAlert = document.createElement("div")
    textAlert.classList.add("alert")
    textAlert.textContent = "Copied"
    document.getElementById("body").appendChild(textAlert)

    document.execCommand("copy")
})

textCutBtn.addEventListener('click', () => {
    document.execCommand("cut")
})