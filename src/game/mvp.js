//progressive complexity increase

//step onePip: roll a single die, minimal UI
const onePip = new NumberPip(1)
let theOneDie = new Die({
    sides: 6,
    faces: [
        new Face({name: "one", pips: [onePip]}),
        new Face({name: "two", pips: [onePip, onePip]}),
        new Face({name: "three", pips: [onePip, onePip, onePip]}),
        new Face({name: "four", pips: [onePip, onePip, onePip, onePip]}),
        new Face({name: "five", pips: [onePip, onePip, onePip, onePip, onePip]}),
        new Face({name: "six", pips: [onePip, onePip, onePip, onePip, onePip, onePip]}),
    ]
})