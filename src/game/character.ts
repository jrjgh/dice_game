import {Equipment} from "@/game/equipment";
import {Health, Inventory} from "@/game/game";

export interface Character {
    name: string;
}

export type Combatant = Player | Enemy;

export interface Enemy extends Character {
    health: Health,
    equipment: Equipment,
    block?: number,
}

export interface Player extends Character {
    health: Health,
    equipment: Equipment,
    block?: number,
    inventory: Inventory,
    experience: number,
}

