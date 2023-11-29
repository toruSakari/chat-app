'use client'

import { Suspense } from 'react'
import { User } from './modules'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <Suspense fallback={<p>ロード中</p>}>
        <User></User>
      </Suspense>
    </main>
  )
}
