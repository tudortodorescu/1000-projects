
const floorImage = new Image();         floorImage.src = '/img/floor.png'
const backgroudImage = new Image();     backgroudImage.src = '/img/background.png'
const boatImage = new Image();          boatImage.src = '/img/boat.png'

export const environmentDraw = {
    state: {
        floorImage,
        backgroudImage,
        boatImage,
    }, 
    actions: {
        drawEnvironment() {
            const { ctx } = store.canvas.getters
            const { distanceFromCenter, boatDistanceFromCenter } = store.environment.getters

            ctx.drawImage( state.backgroudImage, (170 + distanceFromCenter), 0, 392, 176, 0, 0, 392, 176)
            ctx.drawImage( state.boatImage, (200 + boatDistanceFromCenter), 0, 392, 167, 0, 0, 392, 167)
            ctx.drawImage( state.floorImage, (250 + distanceFromCenter), 0, 392, 72, 0, 176, 392, 72)
        }
    }
}

const { state } = environmentDraw