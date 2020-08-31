import React, { FC, useState, ChangeEvent } from 'react'

import './Form.css'

interface FormState {
  username: string,
  password: string,
  cardNumber: string
}

interface CardDetails {
  validTill: string,
  cardState: string
}

export const Form: FC = () => {
  const [formState, setFormState] = useState<FormState>({
    username: '',
    password: '',
    cardNumber: ''
  })

  const [cardDetailsState, setCardDetailsState] = useState<CardDetails>()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const encodedCredentials = Buffer
      .from(`${formState.username}:${formState.password}`)
      .toString('base64')

    try {
      const response = await fetch(`/card/${formState.cardNumber}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json'
        }
      })

      const jsonBody = await response.json()
      setCardDetailsState(jsonBody)
    } catch (err) {
      alert('Failed to fetch card details')
      setCardDetailsState(undefined)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Card number:
          <input
            type="text"
            name="cardNumber"
            value={formState.cardNumber}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      {cardDetailsState &&
        <div>
          <label>Valid till: {cardDetailsState.validTill}</label>
          <label>Card state: {cardDetailsState.cardState}</label>
        </div>
      }
    </>
  )
}
