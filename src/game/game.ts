import {Equipment} from './equipment'
import {Enemy} from './npc'

export interface Game {
    state: GameState,
}

interface GameState {
    player: Player,
}

interface Player {
    inventory: Inventory,
    health: number,
    experience: number,
    equipment: Equipment,
}

interface Inventory {

}

interface Battle {
    enemies: Enemy[],
}

