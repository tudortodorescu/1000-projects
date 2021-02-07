import { canvas } from './canvas/canvas.store.js'
import { gameLoader } from './game-loader/game-loader.store.js'
import { controls } from './controls/controls.store.js'
import { environment } from './environment/environment.store.js'
import { environmentMovement } from './environment/environment-movement/environment-movement.store.js'
import { environmentDraw } from './environment/environment-draw/environment-draw.store.js'
import { gameLoop } from './game-loop/game-loop.store.js'

export default {
    canvas,
    gameLoader,
    controls,
    environment,
    environmentMovement,
    environmentDraw,
    gameLoop
}
