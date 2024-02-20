const boton = document.getElementById('boton')
const bstep1 = document.getElementById('bstep1')
const bstep2 = document.getElementById('bstep2')
const bstep3 = document.getElementById('bstep3')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const nombre = document.getElementById('name')
const email = document.getElementById('email')
const form1 = document.getElementById('form')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const parraf = document.getElementById('warnings')
const parraf2 = document.getElementById('warnings2')
const selecciones = document.getElementById('selecciones')
const step1 = document.getElementById('step-1')
const step2 = document.getElementById('step-2')
const step3 = document.getElementById('step-3')
const steps = document.getElementById('step')
const step = document.getElementById('steps')
const tarjeta1 = document.getElementById('develop')
const tarjeta2 = document.getElementById('personal')
const tarjeta3 = document.getElementById('design')
const finish = document.getElementById('finish')

let spanNombre = document.getElementById('saved-name')
let spanEmail = document.getElementById('saved-email')
let spanUso = document.getElementById('saved-use')
let currentStep = 1

bstep2.disabled = true
bstep3.disabled = true
stepOne()

function stepOne(){
    bstep1.style.backgroundColor = "#845EEE"
    bstep1.style.borderStyle = "solid"
    bstep1.style.borderWidth = "5px"
    bstep1.style.borderColor = "#652CD1"
    bstep3.style.borderStyle = "none"
    bstep2.style.borderStyle = "none"
    currentStep = 1
    steps.innerHTML = currentStep
    form1.style.display = "block"
    step1.style.display = "flex"
    form2.style.display = "none"
    form3.style.display = "none"
    step2.style.display = "none"
    step3.style.display = "none"
    finish.style.display = "none"
    bstep2.addEventListener('click', stepTwo)
    bstep3.addEventListener('click', stepThree)
    form1.addEventListener('submit', e=>{
        e.preventDefault()
        let warnings = ""
        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i
        let entrar = false
        parraf.innerHTML = ""
        if (nombre.value.length < 6){
            warnings += `invalid name <br>`
            entrar = true
        }
        console.log(regexEmail.test(email.value))
        if (!regexEmail.test(email.value)){
            warnings += `invalid email <br>`
            entrar = true
        }
        if (entrar){
            parraf.innerHTML = warnings
        }
        else{
            currentStep++
            stepTwo()
        }
    })
}

function nextStep(){
    if(currentStep == 2){
        stepTwo()
    }
    else if(currentStep == 3){
        stepThree()
    }
}

function stepTwo(){
    currentStep = 2
    steps.innerHTML = currentStep
    bstep2.disabled = false
    bstep1.style.borderStyle = "none"
    bstep3.style.borderStyle = "none"
    bstep2.style.backgroundColor = "#845EEE"
    bstep2.style.borderStyle = "solid"
    bstep2.style.borderWidth = "5px"
    bstep2.style.borderColor = "#652CD1"
    form1.style.display = "none"
    form2.style.display = "block"
    form3.style.display = "none"
    step3.style.display = "none"
    step2.style.display = "block"
    bstep1.addEventListener('click', stepOne)
    bstep3.addEventListener('click', stepThree)
    form2.addEventListener('submit', e=>{
        e.preventDefault()
        let warnings = ""
        let savedUse = ""
        selecciones.innerHTML = ""
        if(tarjeta1.checked == false && tarjeta2.checked == false && tarjeta3.checked == false){
            warnings += `please choose at least one option <br>`
            parraf2.innerHTML = warnings
        }
        else{
            if(tarjeta1.checked){
                savedUse += `<li style="padding-left: 15px;">software develop</li> <br>`
            }
            if(tarjeta2.checked){
                savedUse += `<li style="padding-left: 15px;">personal experience</li> <br>`
            }
            if(tarjeta3.checked){
                savedUse += `<li style="padding-left: 15px;">graphic design</li> <br>`
            }
            selecciones.innerHTML = savedUse
            currentStep++
            stepThree()
        }
    })
}

function stepThree(){
    bstep1.addEventListener('click', stepOne)
    bstep2.addEventListener('click', stepTwo)
    currentStep = 3
    steps.innerHTML = currentStep
    step1.style.display = "none"
    form1.style.display = "none"
    form2.style.display = "none"
    form3.style.display = "block"
    step3.style.display = "block"
    bstep3.disabled = false
    bstep3.style.backgroundColor = "#845EEE"
    bstep3.style.borderStyle = "solid"
    bstep3.style.borderWidth = "5px"
    bstep3.style.borderColor = "#652CD1"
    bstep1.style.borderStyle = "none"
    bstep2.style.borderStyle = "none"
    spanNombre.innerHTML = nombre.value
    spanEmail.innerHTML = email.value
    form3.addEventListener('submit', e=>{
        e.preventDefault()
        step3.style.display = "none"
        finish.style.display = "flex"
        bstep1.style.display = "none"
        bstep2.style.display = "none"
        bstep3.style.display = "none"
        step.style.display = "none"
    })
}