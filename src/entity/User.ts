import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bet } from "./Bet";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column({ type: "decimal", default: 0 })
    balance!: number;

    @OneToMany(() => Bet, (bet) => bet.user)
    bets!: Bet[]
}
