'use client'
import styles from './Die.module.css'
import {Die as d, Face as f, roll as r} from '../../game/dice.ts'
import {Face} from "@/app/components/Face";
import {Dispatch, SetStateAction, useState} from "react";

export default function Die(props: {die: d, showing: number}) {

    const [showing, setShowing] = useState(0)

    return (
        <div onClick={roll.bind(null, props.die, setShowing)}>
            <Face face={props.die.faces[showing]} />
        </div>
    )
}

function roll(die: d, setShowing:Dispatch<SetStateAction<number>>, e) {
    e.preventDefault()
    console.log(die)
    r(die)
    setShowing(die.showingFace)
}