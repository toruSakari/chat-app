

import { makeClient } from '@/apollo'
import { Avatar, Typography } from '@/components/elements'
import { QUERY_USER } from '@/graphql'

export default async function User() {
  const client = makeClient()

  const { data, error } = await client.query({
    query: QUERY_USER
  })

  console.log(data)
  console.log(error)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography>{JSON.stringify(data)}</Typography>
      <Avatar></Avatar>
      <Avatar size='lg'></Avatar>
      <Avatar size='xl'></Avatar>
    </main>
  )
}
