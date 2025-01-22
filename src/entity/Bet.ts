import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User"
import { Game } from "./Game"

@Entity()
export class Bet {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.bets, { onDelete: "CASCADE" })
    user!: User;

    @ManyToOne(() => Game, (game) => game.bets, { onDelete: "CASCADE" })
    game!: Game;

    @Column({ type: "float" })
    amount!: number;

    @Column({ type: "float" })
    odds!: number;

    @Column({ nullable: true })
    outcome?: "win" | "lose" | null; //"win", "lose", or null (if unsettled)

    @Column({ default: false })
    settled?: boolean;
}
