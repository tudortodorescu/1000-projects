import { randomNumber } from "./utils/math.utils.js"

export default class GuessFaceUI {
    constructor( inObj ) {
        this.mainEl = inObj.mainEl
        this.loadingEl = inObj.loadingEl
        this.answersEls = inObj.answersEls
        this.respondButtonEl = inObj.respondButtonEl
        this.totalGuessedEl = inObj.totalGuessedEl
        this.totalQuestionsEl = inObj.totalQuestionsEl
        this.faceImgEl = inObj.faceImgEl
    }

    initEvents() {
        this.answersEls.forEach( answerEl => {
            answerEl.addEventListener( 'click', event => {
                this.removeSelectedAll()
                answerEl.classList.add( 'selected' )
                
                this.setEnabledOrDisabledRespondButton()
            })
        })

        setTimeout(_ => {
            this.loadingEl.style.display = 'none'
            this.mainEl.style.display = ''
        }, randomNumber( 15, 5 ) * 100)
    }
    
    removeSelectedAll() {
        this.answersEls.forEach( answerEl => {
            answerEl.classList.remove( 'selected' )
        })
    }
    
    hasAnswerSelected() {
        return [ ...this.answersEls ].reduce( (initial, answerEl) => {
            return initial || answerEl.classList.contains( 'selected' )
        }, false)
    }
    
    setEnabledOrDisabledRespondButton() {
        this.respondButtonEl[
            this.hasAnswerSelected() ? 
                'removeAttribute' :
                'setAttribute'
        ]( 'disabled' )
    }

    //////////////////////

    setFaceImage( imageSrc ) {
        this.faceImgEl.setAttribute( 'src', imageSrc )
    }
    setAnswers( answers ) {
        this.answersEls.forEach( (answerEl, index) => {
            const countryNameEl = answerEl.querySelector( '.country-name' ) 
            countryNameEl.innerText =  answers[ index ].name

            const flagIconEl = answerEl.querySelector( '.flag-icon' )
            flagIconEl.className = ''
            flagIconEl.classList.add( 'flag-icon' )
            flagIconEl.classList.add( `flag-icon-${ answers[ index ].code.toLowerCase() }` )
        })
    }
}