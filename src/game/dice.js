class GameState {

}

class Player {

}

class PlayerCharacter {
    constructor(attributes) {
        this.health = attributes.health
    }
}

class Pip {
    constructor() {

    }

    effect() {

    }
}

class NumberPip extends Pip {
    constructor(value) {
        super();
        this.value = value
    }

    effect() {
        return this.value
    }
}

//one side of a die
class Face {
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

class Die {
    constructor(attributes) {
        this.sides = attributes.sides
        this.faces = attributes.faces
        if (this.faces.length < this.sides) {
            for (let i = 0; i < this.sides - this.faces.length; i++)
            this.faces.push(new Face())
        }
    }

    roll() {
        const rolledFace = this.faces[Math.floor(Math.random() * this.sides)]
        this.showingFace = rolledFace
        console.log(this.showingFace.effect().map(function(x) { return x() }).reduce((x, y) => x+y))
        return rolledFace
    }
}

class Dungeon extends Die {

}