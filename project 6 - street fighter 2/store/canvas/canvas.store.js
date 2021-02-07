

export const canvas = {
    state: {
        canvas: null,
        ctx: null
    },
    getters: {
        get canvas() {
            return state.canvas
        },
        get ctx() {
            return state.ctx
        } 
    },
    actions: {
        loadCanvas() {
            state.canvas = document.querySelector( '#canvas' )
            state.ctx = getters.canvas.getContext( '2d' )
        }
    }
}

const { state, getters } = canvas