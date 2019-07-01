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


//% color=#D83B01
namespace music {

    /**
     * Play a tone
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% blockId=music_play_note
    //% block="play tone $note tone"
    //% note.shadow="device_note"
    export function playTone(note: number) {

    }

    /**
     * Get the frequency of a note.
     * @param note the note name, eg: Note.C
     */
    //% blockId=device_note block="$note"
    //% shim=TD_ID
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% note.fieldEditor="note" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    export function noteFrequency(note: Note): number {
        return note;
    }
}

