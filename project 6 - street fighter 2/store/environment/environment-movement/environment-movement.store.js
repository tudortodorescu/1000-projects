
export const environmentMovement = {
    state: {
        distanceMove: 1.5
    },
    actions: {
        handleMovement() {
            
            const { isLeftPressed, isRightPressed } = store.controls.getters
            const { distanceFromCenter, hasReachedLeftEdge, hasReachedRightEdge } = store.environment.getters
            const { setDistanceFromCenter, resetLeftEdge, resetRightEdge } = store.environment.actions
            
            if ( isLeftPressed ) {
                setDistanceFromCenter( distanceFromCenter - state.distanceMove )
                
                if ( hasReachedLeftEdge ) {
                    resetLeftEdge()
                }
            }
            else if ( isRightPressed ) {
                setDistanceFromCenter( distanceFromCenter + state.distanceMove )
                
                if ( hasReachedRightEdge ) {
                    resetRightEdge()
                }
            }
        }
    }
}

const { state } = environmentMovement