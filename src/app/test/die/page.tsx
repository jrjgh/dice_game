"use client"

import {Pip, Face,  Die as d} from "@/game/dice";
import Die from "@/app/components/Die";

export default function DiceTest() {

    let theOneDie: d = {
        sides: 6,
        faces: [
           {pips: [Pip.Number]},
            {pips: [Pip.Number, Pip.Number]},
            {pips: [Pip.Number, Pip.Number, Pip.Number]},
            {pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
            {pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
            {pips: [Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number, Pip.Number]},
        ],
        showingFace: 0
    }
    return (
        <main>
            <Die die={theOneDie} showing={1}/>
        </main>
    )
}
