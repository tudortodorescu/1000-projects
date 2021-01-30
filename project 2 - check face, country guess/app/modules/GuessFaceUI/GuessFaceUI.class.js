import { randomNumber } from '/app/utils/math.utils.js'
import { handleAnswersEvents, handleRespondEvents, handleContinueEvents } from './event-handlers/GuessFaceUI.event-handlers.js'

export default class GuessFaceUI {
    constructor( inObj ) {
        Object.assign( this, inObj )

        /////////////////

        this.answerIndex = null
        this.answers = []
        this.person = null

        this.totalGuessed = 0
        this.totalQuestions = 0

        this.disabledEvents = false
    }

    initEvents() {
        handleAnswersEvents.apply( this )
        handleRespondEvents.apply( this )
        handleContinueEvents.apply( this )
    }

    startFakeLoading() {
        this.mainEl.style.display = 'none'
        this.loadingEl.style.display = ''
    
        setTimeout(_ => {
            this.mainEl.style.display = ''
            this.loadingEl.style.display = 'none'
        }, randomNumber( 10, 5 ) * 100 )
    }

    removeAnswersClasses() {
        this.answersEls.forEach( answerEl => {
            answerEl.classList.remove( 'selected' )
            answerEl.classList.remove( 'correct' )
            answerEl.classList.remove( 'incorrect' )
            answerEl.classList.remove( 'extra-answer' )
        })
    }

    get hasAnswerSelected() {
        return [ ...this.answersEls ].reduce( (initial, answerEl) => {
            return initial || answerEl.classList.contains( 'selected' )
        }, false)
    }
    
    setEnabledOrDisabledRespondButton() {
        this.respondButtonEl[
            this.hasAnswerSelected ? 
                'removeAttribute' :
                'setAttribute'
        ]( 'disabled', this.hasAnswerSelected )
    }

    setFaceImage() {
        this.faceImgEl.setAttribute( 'src', this.person.image )
    }

    setAnswersElements() {
        this.answersEls.forEach( (answerEl, index) => {
            const countryNameEl = answerEl.querySelector( '.country-name' )
            countryNameEl.innerText = this.answers[ index ].name

            const flagIconEl = answerEl.querySelector( '.flag-icon' )
            flagIconEl.className = ''
            flagIconEl.classList.add( 'flag-icon' )
            flagIconEl.classList.add( `flag-icon-${ this.answers[ index ].code.toLowerCase() }` )
        })
    }

    makeConfetti() {
        this.confettiCanvasEl.parentElement.style.display = ''

        const confettiInstance = confetti.create( this.confettiCanvasEl, {
            resize: true,
            useWorker: true
        })

        confettiInstance({
            particleCount: 300,
            spread: 160
        })

        setTimeout(_ => {
            this.confettiCanvasEl.parentElement.style.display = 'none'
        }, 5000)
    }
}