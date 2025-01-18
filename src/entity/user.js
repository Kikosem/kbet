const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        username: {
            type: 'varchar'
        },
        email: {
            type: 'varchar'
        },
        balance: {
            type: 'decimal',
            default: 0,
        }
    }
})