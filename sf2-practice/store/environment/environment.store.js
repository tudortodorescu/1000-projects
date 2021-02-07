
export const environment = {
    state: {
        distanceFromCenter: 0,
        worldLeftEdge: -150,
        worldRightEdge: 205,
    },
    getters: {
        get distanceFromCenter() {
            return state.distanceFromCenter
        },
        get boatDistanceFromCenter() {
            const { distanceFromCenter } = getters
            return distanceFromCenter + ( ( ( 100 + distanceFromCenter ) / 100 ) * 20 )
        },

        //////////////////

        get worldLeftEdge() {
            return state.worldLeftEdge
        },
        get worldRightEdge() {
            return state.worldRightEdge
        },
        get hasReachedLeftEdge() {
            return ( getters.distanceFromCenter < getters.worldLeftEdge )
        },
        get hasReachedRightEdge() {
            return ( getters.distanceFromCenter > getters.worldRightEdge )
        }
    },
    actions: {
        setDistanceFromCenter( distanceFromCenter ) {
            state.distanceFromCenter = distanceFromCenter
        },
        resetLeftEdge() {
            state.distanceFromCenter = getters.worldLeftEdge
        },
        resetRightEdge() {
            state.distanceFromCenter = getters.worldRightEdge
        }
    }
}

const { state, getters, actions } = environment