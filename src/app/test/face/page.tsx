'use client'
import {One, Two, Three, Four, Five, Six, Seven, Eight, Nine} from '../../components/Face'
import {Face as f, Pip as p} from '@/game/dice.ts'
import {Face} from '@/app/components/Face'

export default function DiceTest() {
    const face1: f = {
        pips: [p.Damage],
        name: "1d",
    }
    const face2: f = {
        pips: [p.Healing, p.Damage],
        name: "1h1d"
    }
    const face3: f = {
        pips: [p.Healing, p.Damage, p.Armor],
        name: "1h1d1a"
    }
    const face8: f = {
        pips: [
            p.Healing,
            p.Healing,
            p.Healing,
            p.Damage,
            p.Damage,
            p.Armor,
            p.Armor,
            p.Armor,
        ],
        name: "3h2d3a",
    }
    const face9: f = {
        pips: [
            p.Healing,
            p.Healing,
            p.Healing,
            p.Damage,
            p.Damage,
            p.Damage,
            p.Armor,
            p.Armor,
            p.Armor,
        ],
        name: "3h3d3a",
    }
    return (
        <main>
            <Face face={face1} scale={"50%"}/>
            <Face face={face2} scale={"50%"}/>
            <Face face={face3} scale={"50%"}/>
            <Eight face={face8} scale={"50%"}/>
            <Face face={face9} scale={"50%"}/>
        </main>
    )
}
