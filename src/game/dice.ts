import {randomIndex} from '@/util/random'
export enum Pip {
    Number,
    Healing,
    Damage,
    Armor,
}

// //one side of a die
export interface Face {
    pips: Pip[],
}

export interface Effect {
    value: number,
    healing: number,
    damage: number,
    armor: number,
}

function addEffects(e1: Effect, e2: Effect): Effect {
    return {
        value: e1.value + e2.value,
        healing: e1.healing + e2.healing,
        damage: e1.damage + e2.damage,
        armor: e1.armor + e2.armor,
    }
}

export function sumEffects(es: Effect[]): Effect {
    return es.reduce(addEffects, {value: 0, healing: 0, armor: 0, damage: 0})
}

export function effect(f: Face): Effect {
    return f.pips.reduce(function(acc: Effect, pip: Pip) {
        switch (pip) {
            case Pip.Number:
                acc.value++
                break
            case Pip.Healing:
                acc.healing++
                break
            case Pip.Damage:
                acc.damage++
                break
            case Pip.Armor:
                acc.armor++
        }
        return acc
    }, {value: 0, healing: 0, damage: 0, armor: 0,})
}

export interface Die {
    sides: number,
    faces: Face[],
    showingFace: number,
}

export function roll(d: Die): Die {
    d.showingFace = randomIndex(d.faces)
    return d
}