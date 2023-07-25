export type Game = {
    state: GameState,
}

type GameState = {
    player: Player,
}

type Player = {
   inventory: Inventory,
}

type Inventory = {

}
