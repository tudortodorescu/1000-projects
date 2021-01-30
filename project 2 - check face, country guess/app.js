import { qs, qsa } from '/app/utils/dom.utils.js'
import GuessFaceAPI from '/app/modules/GuessFaceAPI/GuessFaceAPI.class.js'
import GuessFaceUI from './app/modules/GuessFaceUI/GuessFaceUI.class.js'
import GuessFaceRandomPerson from './app/modules/GuessFaceRandomPerson/GuessFaceRandomPerson.class.js'

(async _ => {
    const guessFaceApi = new GuessFaceAPI()

    const guessFaceUi = new GuessFaceUI({
        mainEl                : qs( '#main' ),
        loadingEl             : qs( '#loading' ),
        confettiCanvasEl      : qs( '#confetti-canvas canvas' ),
        answersWrapperEl      : qs( '#answers' ),
        answersEls            : qsa( '#answers p' ),
        respondEl             : qs( '#respond' ),
        respondButtonEl       : qs( '#respond button' ),
        respondMessageEl      : qs( '#respond-message' ),
        respondCorrectEl      : qs( '#respond-message #correct' ),
        respondIncorrectEl    : qs( '#respond-message #incorrect' ),
        totalGuessedEl        : qs( '#total-guessed' ),
        totalQuestionsEl      : qs( '#total-questions' ),
        faceImgEl             : qs( '#face img' ),
    })

    const guessFaceRandomPerson = new GuessFaceRandomPerson({
        guessFaceUi,
        guessFaceApi
    })
    
    window.guessFaceApi = guessFaceApi
    window.guessFaceUi = guessFaceUi
    window.guessFaceRandomPerson = guessFaceRandomPerson
    
    guessFaceUi.startFakeLoading()
    await guessFaceApi.init()

    guessFaceRandomPerson.loadRandomPerson()
    guessFaceUi.initEvents()
    
})()


