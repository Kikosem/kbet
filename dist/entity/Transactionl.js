// const { Entity, PrimaryGeneratedColumn, Column, ManyToOne } = require("typeorm");
// const { User } = require("./user");

// @Entity()
// class Transaction {
//     @PrimaryGeneratedColumn()
//     id;

//     @ManyToOne(() => User, () => user.transactions, { onDelete: "CASCADE" })
//     user;

//     @Column()
//     type; // "deposit", "withdrawal", "bet"

//     @Column({ type: "float"})
//     amount;

//     @Column()
//     timestamp;
// }

// module.exports = Transaction;
"use strict";