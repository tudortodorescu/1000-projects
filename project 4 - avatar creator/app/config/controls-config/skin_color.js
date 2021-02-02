
export default {
    title: 'Skin',
    targetClass: [ 
        'js_head',
        'js_ear',
        'js_neck',
        'js_arm',
        'js_torso',
        'js_shoulder',
        'js_leg',
        'js_foot'
    ],
    selectorClass: 'js_skin_color',
    defaultOption: 'caucazian',
    options: {
        'caucazian':  { 'background': 'rgb(255, 236, 239)' },
        'fresh-tan':  { 'background': '#ffbaba' },
        'indian':     { 'background': '#976243' },
        'african':    { 'background': 'rgb(64 51 48)' },
        'alien':      { 'background': 'rgb(163 243 157)' },
    }
}