import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bet } from "./Bet";

@Entity()
export class Game {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

   @Column()
   gameId!: string; // From Lichess API
   
   @Column()
   whitePlayer!: string;

   @Column()
   blackPlayer!: string;

   @Column({ nullable: true })
   result?: "white" | "black" | "draw"; // "white", "black" or "draw"

   @Column()
   timestamp!: Date;

   @OneToMany(() => Bet, (bet) => bet.game)
   bets!: Bet[]
}

