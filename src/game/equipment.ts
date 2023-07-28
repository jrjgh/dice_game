import {Die, Pip} from "@/game/dice";
export interface Equipment {
    head?: HeadArmor,
    body?: BodyArmor,
    rightHand?: HandEquipment,
    leftHand?: HandEquipment,
    legs?: LegArmor,
    feet?: FootEquipment,
}

export interface HeadArmor {}
export interface BodyArmor {}
export interface HandEquipment {}
export interface LegArmor {}
export interface FootEquipment {}

export interface Item {
    name: string,
}

export interface Weapon extends Item {
    dice: Die[],
}

export const ShortSword: Weapon = {
    name: "Short Sword",
    dice: [
        {
            sides: 6,
            faces: [
                {
                    pips: [
                        Pip.Damage
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
            ],
            showingFace: 0,
        }
    ]
}

export const RodentMaw: Weapon = {
    name: "Rodent Maw",
    dice: [
        {
            sides: 6,
            faces: [
                {
                    pips: [
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
                {
                    pips: [
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                        Pip.Damage,
                    ]
                },
            ],
            showingFace: 0,
        }
    ],
}