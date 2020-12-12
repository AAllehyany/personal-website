require('dotenv').config()

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

exports.handler = async (event) => {
  const cards = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('cards'))),
      card => q.Let(
        {
          cardDoc: q.Get(q.Var('card')),
          id: q.Select(['ref', 'id'], q.Var('cardDoc')),
          cardData: q.Select(['data'], q.Var('cardDoc'))
        },
        q.Merge({_id: q.Var('id')}, q.Var('cardData'))
      )
    )
  );

  return {
    statusCode: 200,
    body: JSON.stringify(cards.data)
  }
}