
export default class ControlsRenderer {
    constructor( controlConfig ) {
        this.controlConfig = controlConfig
    }

    createSelectHtml() {
        const { controlConfig } = this

        return `
            <div class="form-group">
                <label>${ controlConfig.labelTitle }</label>
                <select class="${ controlConfig.selectorClass } form-control">
                    ${ this.renderOptionsHtml( controlConfig ) }
                </select>
            </div>
        `
    }
    renderOptionsHtml() {
        const { controlConfig } = this

        let optionsHtml = ''
    
        for ( const optionKey in controlConfig.options ) {
            const selectedHtml = optionKey === controlConfig.defaultOption ? ' selected' : ''
            optionsHtml += `\t\t<option${ selectedHtml } value="${ optionKey }">${ optionKey }</option>\n`
        }
    
        return optionsHtml
    }
}