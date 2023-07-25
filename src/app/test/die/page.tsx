"use client"

import {Face, NumberPip, Die as d} from "@/game/dice";
import Die from "@/app/components/Die";

export default function DiceTest() {

    const onePip = new NumberPip(1)
    let theOneDie = new d({
        sides: 6,
        faces: [
            new Face({name: "one", pips: [onePip]}),
            new Face({name: "two", pips: [onePip, onePip]}),
            new Face({name: "three", pips: [onePip, onePip, onePip]}),
            new Face({name: "four", pips: [onePip, onePip, onePip, onePip]}),
            new Face({name: "five", pips: [onePip, onePip, onePip, onePip, onePip]}),
            new Face({name: "six", pips: [onePip, onePip, onePip, onePip, onePip, onePip]}),
        ]
    })
    return (
        <main>
            <Die die={theOneDie} showing={1}/>
        </main>
    )
}
