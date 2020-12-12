require('dotenv').config()

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

exports.handler = async (event) => {
  const cards = await client.query(
    q.Get(q.Match(q.Index('personal_by_fullName'), 'Ahmad Allehyany'))
  );

  return {
    statusCode: 200,
    body: JSON.stringify(cards.data)
  }
}