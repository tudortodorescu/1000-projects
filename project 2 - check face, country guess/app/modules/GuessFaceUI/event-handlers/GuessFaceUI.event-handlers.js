import GuessFaceRandomPerson from "../../GuessFaceRandomPerson/GuessFaceRandomPerson.class.js"


export function handleAnswersEvents() {
    this.answersEls.forEach( (answerEl, index) => {
        answerEl.addEventListener( 'click', _ => {
            if ( this.disabledEvents ) return

            this.removeAnswersClasses()

            answerEl.classList.add( 'selected' )
            this.answerIndex = index

            this.setEnabledOrDisabledRespondButton()
        })
    })
}

export function handleRespondEvents() {
    this.respondButtonEl.addEventListener( 'click', event => {
        this.respondEl.style.display = 'none'
        this.respondMessageEl.style.display = ''

        this.answersWrapperEl.classList.remove( 'active' )
        this.totalQuestions++

        const answeredCorrect = this.answers[ this.answerIndex ].correct

        if ( answeredCorrect ) {
            handleRespondEventsCorrect.apply( this )
        } else {
            handleRespondEventsIncorrect.apply( this )
        }

        this.totalGuessedEl.innerText = this.totalGuessed
        this.totalQuestionsEl.innerText = this.totalQuestions

        this.disabledEvents = true
    })
}

function handleRespondEventsCorrect() {
    this.respondCorrectEl.style.display = ''
    this.respondIncorrectEl.style.display = 'none'

    const selectedAnswerEl = this.answersEls[ this.answerIndex ]

    selectedAnswerEl.classList.remove( 'selected' )
    selectedAnswerEl.classList.add( 'correct' )

    const answerElForExtra = [ ...this.answersEls ].filter( answerEl => (
        answerEl !== selectedAnswerEl
    ))
    answerElForExtra.forEach( answerEl => answerEl.classList.add( 'extra-answer' ))

    this.totalGuessed++
    this.makeConfetti()
}
function handleRespondEventsIncorrect() {
    this.respondCorrectEl.style.display = 'none'
    this.respondIncorrectEl.style.display = ''

    const selectedAnswerEl = this.answersEls[ this.answerIndex ]

    selectedAnswerEl.classList.remove( 'selected' )
    selectedAnswerEl.classList.add( 'incorrect' )

    const answerElIndex = this.answers.findIndex(({ correct }) => correct)
    const correctAnswerEl = this.answersEls[ answerElIndex ]
    correctAnswerEl.classList.add( 'correct' )

    const answerElForExtra = [ ...this.answersEls ].filter( answerEl => (
        answerEl !== selectedAnswerEl &&
        answerEl !== correctAnswerEl
    ))
    answerElForExtra.forEach( answerEl => answerEl.classList.add( 'extra-answer' ))
}

export function handleContinueEvents() {
    const continueButtonClickEvent = _ => {
        this.startFakeLoading()

        this.respondEl.style.display = ''
        this.respondMessageEl.style.display = 'none'

        this.answersWrapperEl.classList.add( 'active' )

        this.removeAnswersClasses()
        this.setEnabledOrDisabledRespondButton()

        guessFaceRandomPerson.loadRandomPerson()

        this.disabledEvents = false
    }

    this.respondCorrectEl
        .querySelector( 'button' )
        .addEventListener( 'click', continueButtonClickEvent )

    this.respondIncorrectEl
        .querySelector( 'button' )
        .addEventListener( 'click', continueButtonClickEvent )
}