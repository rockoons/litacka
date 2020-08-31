import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

dotenvExpand(dotenv.config())

export const config = {
  port: process.env.API_PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
