namespace basic {

    //% block
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCasethree() {

    }
}

namespace basic2 {
    //% color="#ff0000" icon="\uf0a4"
    //% block
    export function red(){}
}

/**
 * Organize your blocks in groups
 */
//% color="#AA278D"
//% groups="['Fruits', 'Veggies']"
namespace food {
    //% block
    //% group="Veggies"
    export function potato() {

    }

    //% block
    //% group="Veggies"
    export function bean() {

    }

    //% block
    //% group="Fruits"
    export function apple() {

    }

    //% block
    //% group="Fruits"
    export function banana() {

    }
}