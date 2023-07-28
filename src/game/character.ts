import {Equipment} from "@/game/equipment";
import {Health, Inventory} from "@/game/game";

export interface Character {
    name: string;
}

export interface Combatant extends Character {
    health: Health,
    equipment: Equipment,
    block?: number,
}

export interface Enemy extends Combatant {
}

export interface Player extends Combatant {
    inventory: Inventory,
    experience: number,
}

