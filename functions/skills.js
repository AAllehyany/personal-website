require('dotenv').config()

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

exports.handler = async (event) => {
  const skills = await client.query(
    q.Paginate(q.Match(q.Index('all_skills_list')))
  );

  return {
    statusCode: 200,
    body: JSON.stringify(skills.data)
  }
}