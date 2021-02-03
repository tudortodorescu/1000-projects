import avatarConfig from '/app/config/avatar.config.js'
import ControlsRenderer from './ControlsRenderer.class.js'
import ControlsCss from './ControlsCss.class.js'

export default class ControlsCreator {
    constructor() {
        this.controlsWrapper = document.querySelector( '.js_controls' )
    }

    init() {
        this.createSelectElements()
        this.createChangeListeners()
    }

    createSelectElements() {
        for ( const controlKey in avatarConfig.controls ) {
            const controlConfig = avatarConfig.controls[ controlKey ]
            
            const controlsCss = new ControlsCss( controlConfig )
            controlsCss.setCssOptions()

            const selectEl = document.createElement( 'div' )

            const controlsRenderer = new ControlsRenderer( controlConfig )
            selectEl.innerHTML = controlsRenderer.createSelectHtml()

            this.controlsWrapper.append( selectEl )
        }
    }

    createChangeListeners() {
        for ( const controlKey in avatarConfig.controls) {
            const controlConfig = avatarConfig.controls[ controlKey ]

            const { selectorClass, targetClasses, options } = controlConfig
            const controlEl = document.querySelector( `.${ selectorClass }`)
            
            controlEl.addEventListener('change', _ => {
                const selectedOptionKey = controlEl.value

                const controlsCss = new ControlsCss( controlConfig )
                controlsCss.setCssStyles( targetClasses, options[ selectedOptionKey ] )
            })
        }
    }
}
