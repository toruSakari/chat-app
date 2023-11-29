import { PrismaClient, Prisma } from '@client'
import { faker } from '@/lib'

const COUNT = 10

export default async function main(client: PrismaClient) {
  return await client.user.createMany({
    data: [...Array(COUNT)].map<Prisma.UserCreateManyInput>(() => ({
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.helpers.unique(faker.internet.email)
    }))
  })
}
