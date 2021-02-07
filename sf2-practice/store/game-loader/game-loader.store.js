
export const gameLoader = {
    getters: {},
    actions: {
        loadGame() {
            store.canvas.actions.loadCanvas()
            store.controls.actions.setControls()
            store.gameLoop.actions.startLoop()
        }
    }
}
