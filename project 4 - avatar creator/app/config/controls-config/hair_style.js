
export default {
    title: 'Hair Style',
    targetClass: [ 'js_hair' ],
    selectorClass: 'js_hair_style',
    defaultOption: 'afro',
    options: {
        afro: {
            'width': '115px',
            'height': '100px',
            'margin': '-30px 0 0 -15px',
            'clip-path': 'polygon(85% 14%, 66% 3%, 45% 0%, 11% 4%, 0% 25%, 0% 49%, 15% 67%, 26% 49%, 47% 44%, 72% 43%, 89% 59%, 100% 74%, 100% 53%, 100% 35%)',
        },
        mohawk: {
            'width': '115px',
            'height': '100px',
            'clip-path': 'polygon(50% 0%, 28% 100%, 64% 100%)',
            'margin': '-100px 0 0'
        },
        army: {
            'width': '95px',
            'height': '70px',
            'clip-path': 'polygon(99% 0%, 69% 1%, 33% 0%, 15% 0%, 0% 0%, 0% 36%, 0% 32%, 9% 33%, 22% 33%, 36% 35%, 55% 35%, 77% 35%, 100% 35%, 100% 18%)',
            'margin': '-22px 2px 0px'
        },
        emo: {
            'width': '113px',
            'height': '96px',
            'clip-path': 'polygon(92% 10%, 76% 3%, 52% 0%, 26% 5%, 9% 18%, 2% 41%, 6% 67%, 18% 83%, 89% 34%, 72% 36%, 81% 35%, 92% 36%, 100% 35%, 100% 18%)',
            'margin': '-20px 0 0 -12px'
        }
    }
}
