import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

dotenvExpand(dotenv.config())

export const config = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}
