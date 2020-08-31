import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'

import { config } from './config'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (authHeader && /[Bb]asic /.test(authHeader)) {
    const token = authHeader.split(' ')[1]
    const encodedCredentials = Buffer
      .from(`${config.username}:${config.password}`)
      .toString('base64')

    if (token === encodedCredentials) {
      return next()
    }
  }

  res.status(httpStatus.UNAUTHORIZED).send('Invalid user credentials')
}
