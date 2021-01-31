
const timeConfig = {
    0: [ 1, 2, 3, 5, 6, 7 ],
    1: [ 2, 6 ],
    2: [ 1, 2, 4, 5, 7 ],
    3: [ 1, 2, 4, 6, 7  ],
    4: [ 2, 3, 4, 6 ],
    5: [ 1, 3, 4, 6, 7 ],
    6: [ 1, 3, 4, 5, 6, 7],
    7: [ 1, 2, 6 ],
    8: [ 1, 2, 3, 4, 5, 6, 7 ],
    9: [ 1, 2, 3, 4, 6, 7 ],
}

function resetTimeElements() {
    for ( let lineNum = 1; lineNum <= 7; lineNum++ ) {
        const lineEl = document.querySelector( `.line-${ lineNum }` )
        lineEl.style.display = 'none'
    }
}

function setTimeTo( num ) {
    if ( typeof num !== 'number' || num < 0 || num > 9 )
        throw new Error( 'Please provide a number from 0 to 9')

    resetTimeElements()

    for ( const lineNum of timeConfig[ num ] ) {
        const lineEl = document.querySelector( `.line-${ lineNum }` )
        lineEl.style.display = 'block'
    }
}

function incrementTime( timeNum = 0 ) {
    setTimeout( _ => {
        setTimeTo( timeNum )
        incrementTime( timeNum !== 9 ? timeNum + 1 : 0 )
    }, 1000)
}

incrementTime()
