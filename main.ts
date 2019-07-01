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
    export function red() { }
}


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

//% color="#AA278D"
namespace variable {
    /**
     * This API will have a variable shadow block with the name "someName" pre-filled
     */
    //% block="%x=variables_get(EnterName)"
    export function foo(x: number) {

    }
}



//% color="#AA278D"
namespace language {
    /**
     * This is a statement block
     */
    //% block
    export function statement() {

    }

    /**
     * A function that returns a non-void argument generates a reporter block (oval shape).
     */
    //% block
    export function expression(): number {
        return 0;
    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function statementWithArguments(arg1: number) {

    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function statementWith2Arguments(arg1: number, arg2: string) {

    }

    /**
     * When a function has many arguments, it switches to a vertical layout
     */
    //% block
    export function statementWith5Arguments(arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) {

    }

    /**
     * You can force an "inline" layout using inlineInputMode
     */
    //% block
    //% inlineInputMode=inline
    export function statementWith5ArgumentsInline(arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) {

    }
}



