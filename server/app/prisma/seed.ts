import * as seeders from '@/prisma/seeders'
import { PrismaClient } from '@client'

const client = new PrismaClient()

Promise.all(
  Object.values(seeders).map((fn) => {
    return fn(client)
  })
).then(async () => {
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
  })
