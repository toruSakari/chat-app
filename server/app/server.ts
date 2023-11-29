import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import  cors from 'cors'

const app = express();
const port = 8080;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type User {
    name: String!
    age: Int!
  }

  type Query {
    user: User!
  }
`)

class User {
  get name() {
    return '太郎'
  }
  get age() {
    return 18
  }
}

// The root provides a resolver function for each API endpoint
var rootValue = {
  user: () => new User
  ,
}
app.use(cors<cors.CorsRequest>())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
