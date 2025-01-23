import AppDataSource  from "./data-source";
import { User } from "./entity/User";

const seed = async () => {
    const userRepository = AppDataSource.getRepository(User);

    // Create sample users
    const users = [
        { username: "john_doe", email: "john@example.com", balance: 100 },
        { username: "jane_doe", email: "jane@example.com", balance: 200 },
    ];

    for (const user of users) {
        const newUser = userRepository.create(user);
        await userRepository.save(newUser);
    }

    console.log("Database seeded with test data!");
};

seed().catch((error) => console.error("Seeding failed:", error));
