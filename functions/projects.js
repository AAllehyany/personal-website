require('dotenv').config()

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

exports.handler = async (event) => {
  const projects = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_projects'))),
      project => q.Select(['data'], q.Get(q.Var('project')))
    )
  );

  return {
    statusCode: 200,
    body: JSON.stringify(projects.data)
  }
}