'use client'
import styles from './Die.module.css'
import {Die as d, Face as f} from '../../game/dice.ts'
import {Eight, Five, Four, Nine, One, Seven, Six, Three, Two} from "@/app/components/Face";
import {useState} from "react";

export default function Die(props: {die: d, showing: number}) {

    const [showing, setShowing] = useState(0)

    return (
        <div onClick={roll.bind(null, props.die, setShowing)}>
            {
                renderFace(props.die.faces[showing])
            }
        </div>
    )
}

function roll(die, setShowing, e) {
    e.preventDefault()
    console.log(die)
    d.roll()
    setShowing(this.showingFace)
}

function renderFace(face: f) {
    switch (face.pips.length) {
        case 1:
            return <One></One>
        case 2:
            return <Two></Two>
        case 3:
            return <Three></Three>
        case 4:
            return <Four></Four>
        case 5:
            return <Five></Five>
        case 6:
            return <Six></Six>
        case 7:
            return <Seven></Seven>
        case 8:
            return <Eight></Eight>
        case 9:
            return <Nine></Nine>
    }
}