import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const fakeUsers = faker.helpers.multiple(createRandomUser, {
  count: 20,
});
export const usersJson = JSON.stringify(fakeUsers);
