import avatarConfig from '/app/config/avatar.config.js'

export default class ControlsCreator {
    constructor() {
        this.controlsWrapper = document.querySelector( '.js_controls' )
    }

    init() {
        this.createSelectElements()
        this.createChangeListeners()
    }

    ///////////////////////////

    createSelectElements() {
        for ( const controlKey in avatarConfig.controls) {
            const controlConfig = avatarConfig.controls[ controlKey ]
            this.setCssOptions( controlConfig ) 

            const selectEl = document.createElement( 'div' )
            selectEl.innerHTML = this.createSelectHtml( controlConfig )
            
            this.controlsWrapper.append( selectEl )
        }
    }

    createSelectHtml( controlConfig ) {
        return `
            <div class="form-group">
                <label>${ controlConfig.title }</label>
                <div class="form-group">
                    <select class="${ controlConfig.selectorClass } form-control">
                        ${ this.renderOptionsHtml( controlConfig ) }
                    </select>
                </div>
            </div>
        `
    }

    renderOptionsHtml( controlConfig ) {
        let optionsHtml = ''
        
        for ( const option of Object.keys( controlConfig.options ) ) {
            const selectedHtml = option === controlConfig.defaultOption ? ' selected' : ''
            optionsHtml += `\t\t<option${ selectedHtml } value="${ option }">${ option }</option>\n`
        }

        return optionsHtml
    }

    ///////////////////////////

    createChangeListeners() {
        for ( const controlKey in avatarConfig.controls) {
            const controlConfig = avatarConfig.controls[ controlKey ]

            const { selectorClass, targetClass, options } = controlConfig
            const controlEl = document.querySelector( `.${ selectorClass }`)
            
            controlEl.addEventListener('change', _ => {
                const optionKey = controlEl.value
                this.setCssStyles( targetClass, options[ optionKey ] )
            })
        }
    }

    setCssOptions( controlConfig ) {
        const { targetClass, defaultOption, options } = controlConfig
        this.setCssStyles( targetClass, options[ defaultOption ])
    }

    setCssStyles( targetClasses, option ) {
        for ( const targetClass of targetClasses ) {
            const targetEls = document.querySelectorAll( `.${ targetClass }` )
        
            for (const targetEl of targetEls) {
                for ( const cssProperty in option ) {
                    const cssValue = option[ cssProperty ]
                    
                    targetEl.style[ cssProperty ] = cssValue
                }
            }
        }
    }
}
