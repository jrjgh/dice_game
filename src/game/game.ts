import {Player, Enemy} from './character'

export interface Game {
    state: State,
}

export enum Status {
    Default,
    Combat,
}

export interface State {
    status: Status,
    player: Player,
    combat?: Combat,
}

export interface Health {
    max: number,
    current: number,
}

export interface Inventory {

}

interface Combat {
    enemy: Enemy,
}

interface Battle {
    enemies: Enemy[],
}

