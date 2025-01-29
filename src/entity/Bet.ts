import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User"
import { Game } from "./Game"

export enum BetOutcome {
    WIN = "win",
    LOSE = "lose",
    UNSETTLED = "unsettled"
}

@Entity()
export class Bet {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User, (user) => user.bets, { onDelete: "CASCADE" })
    user!: User;

    @ManyToOne(() => Game, (game) => game.bets, { onDelete: "CASCADE" })
    game!: Game;

    @Column({ type: "float" })
    amount!: number;

    @Column({ type: "float" })
    odds!: number;

    @Column({ 
        type: "enum",
        enum: BetOutcome,
        nullable: true,
        default: BetOutcome.UNSETTLED
    })
    outcome?: BetOutcome;

    @Column({ default: false })
    settled?: boolean;
}
