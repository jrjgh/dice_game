export enum Pip {
    Number,
    Healing,
    Damage,
}

// //one side of a die
export type Face = {
    pips: Pip[],
    name: string,
}

export type Effect = {
    value: number,
    healing: number,
    damage: number
}

export function effect(f: Face) {
    return f.pips.reduce(function(acc: Effect, pip) {
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
        }
        return acc
    }, {value: 0, healing: 0, damage: 0})
}

export type Die = {
    sides: number,
    faces: Face[],
    showingFace: number,
}

export function roll(d: Die): Die {
    d.showingFace = Math.floor(Math.random() * d.sides)
    return d
}