
export const environmentAnimation = {
    state: {
        frameCounter: 0,
        frameRate: 20,

        //////////////////

        boatVerticalFrame: 0,
        boatVerticalFrameDelta: 1,

        flagFrame: 0,
        flagFrameDelta: 1,
        
        gangstersFrame: 0,
        gangstersFrameDelta: 1,

        blueSuitFrame: 0,
        blueSuitFrameDelta: 1,

        greenguyFrame: 0,
        greenguyFrameDelta: 1,

        redwomanFrame: 0,
        redwomanFrameDelta: 1,
    },
    getters: {
        get isTimeForFrameChange() {
            return state.frameCounter % state.frameRate === 0
        }
    },
    actions: {
        increaseFrameCounter() {
            state.frameCounter++
        },
        
        setBoatVertical() {
            actions.handleFrame({
                frame: 'boatVerticalFrame',
                frameDelta: 'boatVerticalFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },
        setFlagFrame() {
            actions.handleFrame({
                frame: 'flagFrame',
                frameDelta: 'flagFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },
        setBluesSuitFrame() {
            actions.handleFrame({
                frame: 'blueSuitFrame',
                frameDelta: 'blueSuitFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },
        setGreenguyFrame() {
            actions.handleFrame({
                frame: 'greenguyFrame',
                frameDelta: 'greenguyFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },
        setRedwomanFrame() {
            actions.handleFrame({
                frame: 'redwomanFrame',
                frameDelta: 'redwomanFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },
        setGangstersFrame() {
            actions.handleFrame({
                frame: 'gangstersFrame',
                frameDelta: 'gangstersFrameDelta',
                sprites: arguments[ 0 ],
                callbackFn: arguments[ 1 ]
            })
        },

        /////////////////////////

        handleFrame({ sprites, frame, frameDelta, callbackFn }) {
            if ( state[ frame ] < 0 || state[ frame ] === sprites.length) {
                state[ frameDelta ] *= -1

                state[ frame ] += state[ frameDelta ]
                state[ frame ] += state[ frameDelta ]
            }
            
            // console.log({ image: sprites[ state[ frame ] ], [frame]: state[ frame ], [frameDelta]: state[ frameDelta ] })
            
            callbackFn( state[ frame ], sprites )
            
            state[ frame ] += state[ frameDelta ]

        }
    }
}

const { state, getters, actions } = environmentAnimation