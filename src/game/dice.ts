
// export type Face = {
//
// }
// export type Die = {
//

// class Player {
//
// }
//
// class PlayerCharacter {
//     private health: any;
//     constructor(attributes) {
//         this.health = attributes.health
//     }
// }
//
class Pip {
    constructor() {

    }

    effect() {

    }
}

export class NumberPip extends Pip {
    private readonly value: number;
    constructor(value) {
        super();
        this.value = value
    }

    effect() {
        return this.value
    }
}

// //one side of a die
export class Face {
    public pips: Pip[];
    private name: string;
    constructor(attributes) {
        this.pips = attributes.pips
        this.name = attributes.name
    }

    effect() {
        return this.pips.reduce(function(acc, pip) {
            acc.push(pip.effect.bind(pip))
            return acc
        }, [])
    }
}

export class Die {
    public readonly sides: number;
    public readonly faces: Face[];
    public showingFace: number;
    constructor(attributes) {
        this.sides = attributes.sides
        this.faces = attributes.faces
        if (this.faces.length < this.sides) {
            for (let i = 0; i < this.sides - this.faces.length; i++)
            this.faces.push(new Face({}))
        }
    }

    roll() {
        const rolledFace = Math.floor(Math.random() * this.sides)
        this.showingFace = rolledFace
        console.log(this.faces[this.showingFace].effect().map(function(x) { return x() }).reduce((x, y) => x+y))
        return rolledFace
    }
}
//
// class Dungeon extends Die {
//
// }