import {
    floorImage,
    backgroudImage,
    boatImage,
    gangstersImage,
    gangstersSprites,
    redwomanImage,
    redwomanSprites,
    greenguyImage,
    greenguySprites,
    blueSuitImage,
    blueSuitSprites,
    flagImage,
    flagSprites,
} from './images-and-sprites/images-and-sprites.js'

const boatOffsetY = 13

export const environmentDraw = {
    state: {
        floorImage,
        backgroudImage,
        boatImage,
        gangstersImage,
        redwomanImage,
        greenguyImage,
        blueSuitImage,
        flagImage,
    }, 
    actions: {
        drawEnvironment() {
            actions.setEnvironmnentAnimations()
            actions.drawStaticImages()
            actions.drawAnimatedImages()
        },
        setEnvironmnentAnimations() {
            const { increaseFrameCounter, setFlagFrame, setBluesSuitFrame, setGreenguyFrame, setRedwomanFrame, setGangstersFrame, setBoatVertical } = store.environmentAnimation.actions
            const { boatDistanceVerticalArray } =  store.environment.state
            const { isTimeForFrameChange } =  store.environmentAnimation.getters

            increaseFrameCounter()
            if ( !isTimeForFrameChange ) return

            setBoatVertical( boatDistanceVerticalArray, (frame, sprites) => store.environment.state.boatDistanceVertical = sprites[ frame ] )
            setFlagFrame( flagSprites, (frame, sprites) => state.flagImage.src = sprites[ frame ] )
            setBluesSuitFrame( blueSuitSprites, (frame, sprites) => state.blueSuitImage.src = sprites[ frame ] )
            setGreenguyFrame( greenguySprites, (frame, sprites) => state.greenguyImage.src = sprites[ frame ] )
            setRedwomanFrame( redwomanSprites, (frame, sprites) => state.redwomanImage.src = sprites[ frame ] )
            setGangstersFrame( gangstersSprites, (frame, sprites) => state.gangstersImage.src = sprites[ frame ] )
        },
        drawStaticImages() {
            const { ctx } = store.canvas.getters
            const { distanceFromCenter, boatDistanceFromCenter  } = store.environment.getters
            const { boatDistanceVertical } = store.environment.state

            ctx.drawImage( state.backgroudImage, (170 + distanceFromCenter), 0, 392, 176, 0, 0, 392, 176)
            ctx.drawImage( state.boatImage, (200 + boatDistanceFromCenter), boatDistanceVertical, 392, 167, 0, boatOffsetY, 392, 167)
            ctx.drawImage( state.floorImage, (250 + distanceFromCenter), 0, 392, 72, 0, 176, 392, 72)
            
        },
        drawAnimatedImages() {
            const { ctx } = store.canvas.getters
            const { distanceFromCenter, boatDistanceFromCenter } = store.environment.getters
            const { boatDistanceVertical } = store.environment.state

            ctx.drawImage( state.flagImage, 390 - distanceFromCenter, 20 - boatDistanceVertical )
            ctx.drawImage( state.blueSuitImage, 88 - boatDistanceFromCenter, 82 - boatDistanceVertical + boatOffsetY )
            ctx.drawImage( state.greenguyImage, 24 - boatDistanceFromCenter, 90 - boatDistanceVertical + boatOffsetY )
            ctx.drawImage( state.redwomanImage, -8 - boatDistanceFromCenter, 90 - boatDistanceVertical + boatOffsetY )
            ctx.drawImage( state.gangstersImage, -72 - boatDistanceFromCenter, 90 - boatDistanceVertical + boatOffsetY )
        }
        
    }
}

const { state, actions } = environmentDraw