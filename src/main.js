require('dotenv').config()
const MilleFeuille = require('@frenchpastries/millefeuille')
const { response } = require('@frenchpastries/millefeuille/response')
const fetch = require('node-fetch')

const helloResponse = response('Hello French Pastries!')

const handler = (request) => {
  console.log(JSON.stringify(request.headers))
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...{
        method: request.method,
      },
      url: request.url,
      headers: request.headers,
    }),
  }
}

const server = MilleFeuille.create(handler)
