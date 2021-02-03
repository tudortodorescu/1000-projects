
export default class ControlsCss {
    constructor( controlConfig ) {
        this.controlConfig = controlConfig
    }

    setCssOptions() {
        const { targetClasses, defaultOption, options } = this.controlConfig
        this.setCssStyles( targetClasses, options[ defaultOption ] )
    }

    setCssStyles( targetClasses, option ) {
        for ( const targetClass of targetClasses ) {
            const targetEls = document.querySelectorAll( `.${ targetClass }` )
        
            for ( const targetEl of targetEls ) {
                for ( const cssProperty in option ) {
                    const cssValue = option[ cssProperty ]
                    targetEl.style[ cssProperty ] = cssValue
                }
            }
        }
    }
    
}
