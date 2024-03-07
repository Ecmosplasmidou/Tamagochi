/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendnat plus d'une minute
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement après avoir mangé
*/




//PHASE 0 : Démarrer le jeu
//1)cliquer sur le bouton du centre (start)
//2)quand on arrive à 3 clics, on lance la fonction startButton
//3)lancer la fonction startButton

const start = () => {
    const buttonCenter = document.querySelector('.js-button[data-direction = "center"]') //sert à cibler la classe js-button et la data-direction center 
    let clickCount = 0 //sert à compter les clics
    buttonCenter.addEventListener('click', () => { //sert à écouter le clic
        clickCount++ //sert à compter les clics
        if (clickCount === 3) { //sert à dire que si on arrive à 3 clics, on lance la fonction startButton
            // startButton()
            startGame()
        }
    })
}


//PHASE 1 la naissance de mon EcmosGotchi
// 1) Demander le prénom de l'EcmosGotchi
// 2)faire éclore l'oeuf
// 3)afficher les vitals
// 4)afficher le nom dans les vitals
//5)mettre les scores des vitals à 5 
//6)afficher les actions possibles
//7)appeler la fonction pour le faire évoluer

// ----------------------------------POPUP------------------------------------------------------------------------
const begin = document.querySelector(".js-begin") //sert à cibler la classe js-begin
begin.classList.remove("hidden") //sert à cacher la classe js-begin

const startGame = () => {
    const popup = document.querySelector(".js-popup") //sert à cibler la classe js-popup
    popup.classList.remove("hidden") //sert à cacher la classe js-popup
    // const enterName = () =>{
    //     const popup_button = document.querySelector(button)
    //     let clickCountName = 0 //sert à compter les clics
    //     popup_button.addEventListener('click', () => { //sert à écouter le clic
    //         clickCountName++ //sert à compter les clics
    //         if (clickCountName === 1) { //sert à dire que si on arrive à 3 clics, on lance la fonction startButton
    //             startButton()
    //         }
    //     })
    // }
//     // if (popup.classList.contains("hidden")) { //sert à dire que si la classe js-popup est cachée
//     //     startButton() //alors on lance la fonction startButton
    const begin = document.querySelector(".js-begin") //sert à cibler la classe js-begin
    begin.classList.add("hidden") //sert à cacher la classe js-begin
    startTitle.classList.add("hidden") //sert à cacher le texte dans la classe js-stitle
}





// ---------------------------------------------------------------------------------------------------------------






const startTitle = document.querySelector(".js-stitle") //sert à cibler la classe js-stitle
startTitle.classList.remove("hidden") //sert à afficher le texte dans la classe js-stitle

//event dans startButton a mettre
const startButton = (event) => {
    event.preventDefault()
    // // PREMIERE FONCTION : demander le prénom
    // const ecmosName = prompt("Quel est le nom de ton EcmosGotchi?")
    // if (ecmosName === null || ecmosName === "") { //sert à dire que si le prompt est annulé ou vide
    //     alert("Tu dois choisir un nom pour ton EcmosGotchi") //alors on affiche un message d'erreur
    //     return location.reload()
    // }
    
    //DEUXIEME FONCTION : faire éclore l'oeuf
    // const character = document.querySelector(".js-character") // sert à cibler la classe js-character
    // character.textContent = "🐣" // sert à avoir une autre image aprés le prompt
    showOnScreen("🐣") //sert à afficher l'image de l'oeuf

    //TROISIEME FONCTION : afficher les vitals
    const vitals = document.querySelector(".js-vitals") //sert à cibler la classe js-vitals
    vitals.classList.remove("hidden") //sert à enlever la classe hidden

    //QUATRIEME FONCTION : afficher le nom dans les vitals
    const inputElement = document.querySelector(".popup-text")
    const inputValue = inputElement.value
    const nameDisplay = document.querySelector(".js-tamaName") //sert à cibler la classe js-tamaName 
    nameDisplay.textContent = inputValue //sert à afficher le nom dans les vitals

    //CINQUIEME FONCTION : mettre les scores des vitals à 5
    const scoreDisplay = document.querySelectorAll(".js-score") //sert à cibler la classe js-score
    scoreDisplay.forEach(function(score) { //sert à cibler chaque score (chaque class avec score dedans)
        score.textContent = "5" //sert à mettre chaque score à 5
        //ou scoreDisplay.forEach((score) =>{})
    })

    startTitle.classList.add("hidden") //sert à cacher le texte dans la classe js-stitle

    //SIXIEME FONCTION : afficher les actions possibles
    const actions = document.querySelector(".js-actions") //sert à cibler la classe js-actions
    actions.classList.remove("hidden") //sert à enlever la classe hidden de js-actions

    //SEPTIEME FONCTION : appeler la fonction pour le faire évoluer
    evolve()
}


// PHASE 2 : evolution de l'EcmosGotchi
//1)attendre une envie
//2)il devient grand

const evolve = () => {
    //attendre une envie
    const functionToExecute = () =>{
        showOnScreen("🐥")
    }
    wantsTo(functionToExecute)
}


//PHASE 3 : les envies de l'EcmosGotchi
//----> fonction pour générer
// - 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
// - 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
// - 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement après avoir mangé
// 1)creer une fonction qu'on vas appeler plus tard dans le code
// 2)stocker les envies dans une variable
// 3)Avec un setTimeout choisir une envie aléatoire
// 4)la durée du setTimeout est dynamique comprise entre val max et min
// 5)afficher l'envie sur l'écran
// 6)envie de faire caca peut être déclenchée uniquement après avoir mangé

const wantsTo = (callback) => {
    const wants = ["😋", "🥱", "💩"] //sert à stocker les envies dans une variable
    //min = 1sec et max = 3sec (à changer plus tard)
    const minDuration = 1000
    const maxDuration = 3000
    const duration = getRandomInt({min: minDuration, max: maxDuration})
    setTimeout(() =>{
        const randomIndexWants = getRandomInt({min:0, max:wants.length}) //sert à choisir une envie aléatoire
        const desire = wants[randomIndexWants] //sert à stocker l'envie aléatoire dans une variable
        // showOnScreen(desire) //sert à afficher l'envie sur l'écran
        if (callback) { //sert à dire que si il y a un callback
            callback() //  alors on lance le callback
        } else{
            showOnScreen(desire) //sinon on affiche l'envie sur l'écran
        }
    }, duration)
}

//fonction pour choisir un nombre aléatoire
const getRandomInt = (props) => {
    // const{min, max} = props //sert à stocker les valeurs min et max dans une variable
    const max = props.max
    const min = props.min? props.min : 0 // sert à dire que si min n'est pas défini, alors min = 0
    return Math.floor(Math.random() * (max - min) + min)//sert à choisir un nombre aléatoire
}

//fonction qui affiche l'envie (emoji) sur l'écran
const character = document.querySelector(".js-character") // sert à cibler la classe js-character
const showOnScreen = (display)=>{    
    character.textContent = display
}


//lancer la fonction start
start()










