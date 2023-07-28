import {Effect} from '@/game/dice'
import {Combatant} from '@/game/character'

export function applyPreStrike(e: Effect, c: Combatant): Combatant {
    c.block = e.armor
    c.health.current = Math.min(c.health.max, c.health.current + e.healing)
    return c
}

export function applyStrike(e: Effect, c: Combatant): Combatant {
    const postBlock = Math.max(e.damage - c.block, 0);
    c.health.current -= postBlock;
    return c
}