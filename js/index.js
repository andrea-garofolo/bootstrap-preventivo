//console.log("Modulo-preventivi") //Test connessione

//RECUPERO GLI ID

const buttonElement = document.getElementById("submit")

const workElement = document.getElementById("WorkType")

const priceIntELement = document.getElementById("prezzoIntero")

const priceDecimalELement = document.getElementById("prezzoDecimale")

const scontoElement = document.getElementById("sconto")

const CodErrorElement = document.getElementById("CodError")

//DEFINISCO I COSTI

//sviluppo backend
const backend = 20.50  // €/h

//sviluppo frontend
const frontend = 15.30 // €/h

//analisi progettuale
const analisi = 33.60 // €/h

//DEFINISCO LE ORE DI LAVORO

//Ore di lavoro
const WorkHour = 10.00

//DEFINISCO I VALORI DEGLI SCONTI

//Sconto del 25%
const scontoValue = 0.25



// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()

        } else if (form.checkValidity()) {
            event.preventDefault()

            const typeOfWork = workElement.value
            const priceStandard = calcoloCostoStandard(typeOfWork)

            const insertSconto = scontoElement.value

            let finalPrice = 0

            if (insertSconto === "") {
                finalPrice = priceStandard
                //console.log("no sconto")
            } else {

                const codSconto = verificoCodiceSconto(insertSconto)
                if (codSconto === true) {
                    //console.log("hai lo sconto")
                    finalPrice = priceStandard - priceStandard * scontoValue
                    //console.log("sconto")
                    CodErrorElement.innerHTML = `
                    <span class="valid-Code">
                    Il codice sconto è valido
                    </span>
                    `

                } else {
                    finalPrice = priceStandard
                    //console.log("errore sconto")
                    CodErrorElement.innerHTML = `
                    <span class="invalid-Code">
                    Il codice sconto inserito non è valido
                    </span>
                    `
                }
            }

            priceIntELement.innerHTML = '&euro; ' + Math.floor(finalPrice)
            priceDecimalELement.innerHTML = "," + decimalNum(finalPrice)
        }





        form.classList.add('was-validated')
    }, false)
})




//FUNZIONI

function calcoloCostoStandard(text) {

    let standardCost = 0

    if (text === "SBackend") {
        standardCost = backend * WorkHour
    }
    else if (text === "SFrontend") {
        standardCost = frontend * WorkHour
    }
    else if (text === "AnalisiP") {
        standardCost = analisi * WorkHour

    }
    return standardCost
}



function verificoCodiceSconto(text) {

    //Codici sconto del 25%"
    let listSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

    let scontoTrovato = false // booean

    for (let i = 0; i < listSconto.length; i++) {
        const currentSconto = listSconto[i]
        if (currentSconto === text) {
            scontoTrovato = true
        }

    }

    return scontoTrovato
}


function decimalNum(num) {
    let decimal = "00"

    if (((num - Math.floor(num)) * 100) !== 0) {
        decimal = ((num - Math.floor(num)) * 100)
    }

    return decimal
}

