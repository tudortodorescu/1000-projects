

export const controls = {
    state: {
        leftPressed: false,
        rightPressed: false,
    },    
    getters: {
        get isLeftPressed() { 
            return state.leftPressed
        },
        get isRightPressed() { 
            return state.rightPressed
        }
    },
    mutations: {
        changeLeftPressed( leftPressed ) {
            state.leftPressed = leftPressed
        },
        changeRightPressed( rightPressed ) {
            state.rightPressed = rightPressed
        },
    },
    actions: {
        setLeftPressed( value ) {
            mutations.changeLeftPressed( value )
        },
        setRightPressed( value ) {
            mutations.changeRightPressed( value )
        },

        ////////////////////////////

        setControls() {
            document.addEventListener( 'keydown', actions.handleKeyDown, false)
            document.addEventListener( 'keyup', actions.handleKeyUp, false)
        },
        handleKeyDown({ keyCode }) {
            if ( keyCode === 37 ) {
                actions.setLeftPressed( true )
            }
            else if ( keyCode === 39 ) {
                actions.setRightPressed( true )
            }
        },
        handleKeyUp({ keyCode }) {
            if ( keyCode === 37 ) {
                actions.setLeftPressed( false )
            }
            else if ( keyCode === 39 ) {
                actions.setRightPressed( false )
            }
        }
    }
}

const { state, getters, mutations, actions } = controls
