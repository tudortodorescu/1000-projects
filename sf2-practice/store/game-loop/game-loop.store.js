
export const gameLoop = {
    actions: {
        startLoop() {
            setInterval( actions.sequenceLoop, 10 )
        },
        sequenceLoop() {
            store.environmentDraw.actions.drawEnvironment()
            store.environmentMovement.actions.handleMovement()
        }
    }
}

const { actions } = gameLoop    
