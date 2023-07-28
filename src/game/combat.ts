import {State} from '@/game/game'
import {Die, Effect, roll, effect, sumEffects} from '@/game/dice'
import {Combatant, Player, Enemy} from '@/game/character'

type PreRoll = {
    player: Player,
    enemy: Enemy,
    rolled: false,
    playerDice: Die[],
    enemyDice: Die[],
}

type PostRoll = {
    player: Player,
    enemy: Enemy,
    rolled: true,
    playerDice: Die[],
    enemyDice: Die[],
}

type CombatEffects = {
    player: Player,
    enemy: Enemy,
    playerEffect: Effect,
    enemyEffect: Effect,
}

type CombatResult = {
    player: Player,
    enemy: Enemy,
}

export function getActiveDice(p: Player, e: Enemy): PreRoll {
    const playerDice = Object.values(p.equipment).map(e => e.dice).flat()
    const enemyDice = Object.values(e.equipment).map(e => e.dice).flat()

    return {
        player: p,
        enemy: e,
        rolled: false,
        playerDice,
        enemyDice,
    }
}

function rollAll(a: PreRoll): PostRoll {
   return {
       ...a,
       rolled: true,
       playerDice: a.playerDice.map(roll),
       enemyDice: a.enemyDice.map(roll),
   }
}

function addEffects(p: PostRoll): CombatEffects {
    return {
        player: p.player,
        enemy: p.enemy,
        playerEffect: sumEffects(p.playerDice.map(d => effect(d.faces[d.showingFace]))),
        enemyEffect: sumEffects(p.enemyDice.map(d => effect(d.faces[d.showingFace]))),
    }
}


export function applyPreStrike<Type>(e: Effect, c: Type): Type {
    c.block = e.armor
    c.health.current = Math.min(c.health.max, c.health.current + e.healing)
    return c
}

export function applyStrike<Type>(e: Effect, c: Type): Type {
    const postBlock = Math.max(e.damage - c.block, 0);
    c.health.current -= postBlock;
    return c
}

function applyEffects(ce: CombatEffects): CombatResult {
    return {
        player: applyStrike(ce.enemyEffect, applyPreStrike(ce.playerEffect, ce.player)),
        enemy: applyStrike(ce.playerEffect, applyPreStrike(ce.enemyEffect, ce.enemy)),
    }
}

export function combatRound(s: State): State {
    const preRoll: PreRoll = getActiveDice(s.player, s.combat.enemy)
    const result = applyEffects(addEffects(rollAll(preRoll)))
    s.player = result.player
    s.combat.enemy = result.enemy
    return s
}