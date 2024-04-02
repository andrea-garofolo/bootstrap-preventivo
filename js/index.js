//console.log("Modulo-preventivi") //Test connessione


//RECUPERO GLI ID

const buttonElement = document.getElementById("submit")

const workElement = document.getElementById("WorkType")

const priceELement = document.getElementById("prezzoTotale")


//DEFINISCO I COSTI

//sviluppo backend
const backend = 20.50

//sviluppo frontend
const frontend = 15.30

//analisi progettuale
const analisi = 33.60

//costo orario
const costByHour = 10.00

//console.log(backend,frontend,analisi,costByHour)



buttonElement.addEventListener("submit", function (event) {
    //console.log('click sul button')
    event.preventDefault()

    const work = workElement.value

    
   
    //console.log (total)

    //calcolo sconti
    if (work === "SBackend") {
        backend * costByHour
        console.log(backend * costByHour)
        priceELement.innerHTML = backend * costByHour
    }
    else if (work === "SFrontend") {
        frontend * costByHour
        console.log(frontend * costByHour)
        priceELement.innerHTML = frontend * costByHour
    }
    else if (work === "AnalisiP") {
        analisi * costByHour
        console.log(analisi * costByHour)
        priceELement.innerHTML = analisi * costByHour
    }
    else {
        priceELement.innerHTML = "n/a"
    }    
})