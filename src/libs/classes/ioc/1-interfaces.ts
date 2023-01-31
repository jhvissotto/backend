// ================================================= //
// ================ GENERALIZATIONS ================ //
// ================================================= //

export interface Warrior {
    shortFight(): string
    longFight(): string
}

export interface CuttingWeapon {
    hit(): string
}

export interface PiercingWeapon {
    throw(): string
}