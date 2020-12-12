require('dotenv').config()

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

exports.handler = async (event) => {
  const degrees = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_degrees'))),
      degree => q.Select(['data'], q.Get(q.Var('degree')))
    )
  );

  return {
    statusCode: 200,
    body: JSON.stringify(degrees.data)
  }
}