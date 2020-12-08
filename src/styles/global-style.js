export const hd = 1 // 基础单位
export function px(size){
    return `${size * hd}px`
}
export const extendClick = () => {
    return`
    position:relative;
    &::before{
        content:'';
        position:absolute;
        top:10px;
        bottom:10px;
        left:10px;
        right:10px
    }
    `
}

export const nowrap = () =>{
    return`
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap
    `
}

const $body = '#ffbe51'
const $head = '#cbc0bc'

// 自然色
export const $blue =  '#0d6efd'
export const $red = '#f26369'   // 参考异度之刃的红
export const $yellow = '#ffed7d'
export const $cyan = '#17a2b8' 
export const $indigo = '#6610f2' 
export const $purple = '#6f42c1'
export const $pink =  '#d63384'  
export const $orange = '#fd7e14' 
export const $green = '#52c41a' 
export const $teal = '#20c997' 
 
// 中性色
const $white = '#fff'
export const $gray_100 = '#f8f9fa'
export const $gray_200 = '#e9ecef'
export const $gray_300 = '#dee2e6'
export const $gray_400 = '#ced4da' 
export const $gray_500 = '#adb5bd' 
export const $gray_600 = '#6c757d' 
export const $gray_700 = '#495057' 
export const $gray_800 = '#343a40'

// 主题色和产品色
export const theme = {
    'theme-color': $body,
    $primary: $body,
    $secondary: $head,
    $success: $blue,
    $info: $cyan, 
    $warning: $yellow, 
    $danger: $red, 
    $light: $gray_100, 
    $dark: $gray_800, 
    $white
}

// 字体
export const font = {
    '$font-size-ss': px(10),
    '$font-size-s': px(12),
    '$font-size-base': px(14),
    '$font-size-l': px(16),
    '$font-size-ll': px(18),

    '$font-weight-lighter': 'lighter',
    '$font-weight-light': 300,
    '$font-weight-normal': 400,
    '$font-weight-bold': 700,
    '$font-weight-bolder': 'bolder',
    '$font-weight-base': 400
}

// border
export const border = {
    '$border-width': px(1),
    '$border-color': $gray_300,
    '$border-radius': px(5),
    '$border-radius-lg': px(6),
    '$border-radius-sm': px(4)
}

export const variables = {
    ...theme,
    ...font,
    ...border,
    '$padding-x': px(12),
    extendClick,
    nowrap
}