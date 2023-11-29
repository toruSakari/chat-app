'use client'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"
import {
  ApolloNextAppProvider,
} from "@apollo/experimental-nextjs-app-support/ssr"
import React from "react"
import { setVerbosity } from "ts-invariant"
import { makeClient } from "@/apollo"
import { isDevelopment } from '@/utils'


if (isDevelopment) {
  setVerbosity("debug");
  loadDevMessages();
  loadErrorMessages();
}

export default function WithApollo({
  children,
}: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
