import superagent from 'superagent'
import moment from 'moment'

const mockUrl = 'http://private-264465-litackaapi.apiary-mock.com/cards/'

interface ValidityData {
  validity_start: string
  validity_end: string
}

interface StateData {
  state_id: number
  state_description: string
}

async function getMockData(card: string, path: 'validity'): Promise<ValidityData>
async function getMockData(card: string, path: 'state'): Promise<StateData>
async function getMockData(card: string, path: string) {
  const endpoint = `${mockUrl}/${card}/${path}`
  try {
    const response = await superagent('GET', endpoint)
      .set('content-type', 'application/json')
      .send()
    return response.body
  } catch (err) {
    console.log(`Failed to fetch card data from ${endpoint}`, err)
  }
}

export const getValidTill = async (card: string) => {
  const { validity_end: validTill } = await getMockData(card, 'validity')
  return moment(validTill).format('D.M.YYYY')
}

export const getCardState = async (card: string) => {
  const { state_description: stateDescription } = await getMockData(card, 'state')
  return stateDescription
}
