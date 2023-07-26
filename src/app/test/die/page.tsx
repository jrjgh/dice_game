"use client"

import {Pip, Face,  Die as d} from "@/game/dice";
import Die from "@/app/components/Die";

export default function DiceTest() {

    let theOneDie: d = {
        sides: 6,
        faces: [
           {name: "one", pips: [Pip.Number]},
            {name: "two", pips: [Pip.Number, Pip.Number]},
            {name: "three", pips: [Pip.Number, Pip.Number, Pip.Number]},
            {name: "four", pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
            {name: "five", pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
            {name: "six", pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
        ],
        showingFace: 0
    }
    return (
        <main>
            <Die die={theOneDie} showing={1}/>
        </main>
    )
}
