import {Player, Enemy} from './character'

export interface Game {
    state: State,
}

export enum Status {
    Default,
    Combat,
    CombatVictory,
    PlayerDead,
}

export interface State {
    status: Status,
    player: Player,
    combat?: Combat,
}

//function checkGameState updates various fields based on conditions of the game state
export function checkGameState(s: State): State {
    if (s.player.health.current <= 0) {
        s.status = Status.PlayerDead
    }
    if (s.combat?.enemy.health.current <= 0) {
        s.status = Status.CombatVictory
    }
    return s
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

