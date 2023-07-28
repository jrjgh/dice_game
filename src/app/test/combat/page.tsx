'use client';
import Combat from "@/app/components/Combat";
import {RodentMaw, ShortSword} from "@/game/equipment";
import {State, Status} from "@/game/game";
import {useState} from 'react';

const initialState: State = {
    status: Status.Combat,
    player: {
        name: "Harold",
        inventory: {},
        health: {
            max: 10,
            current: 10,
        },
        experience: 10,
        equipment: {
            rightHand: ShortSword
        },
    },
    combat: {
        enemy: {
            name: "rodent",
            health: {
                max: 8,
                current: 8,
            },
            equipment: {
                head: RodentMaw
            }
        }
    }
};

export default function CombatTest() {
   const [state, updateState] = useState(initialState)
    return <Combat state={state} updateState={updateState}/>
}