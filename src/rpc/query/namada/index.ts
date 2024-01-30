import { Query } from '@namada/shared'
import { Validator } from './types'
import BigNumber from 'bignumber.js'

const toValidator = (address: string): Validator => ({
  uuid: address,
  name: address,
  homepageUrl: 'http://namada.net',
  commission: new BigNumber(0),
  description: 'TBD',
})

export async function fetchValidators(rpc: string): Promise<Validator[]> {
  const query = new Query(rpc)
  const queryResult = (await query.query_all_validator_addresses()) as string[]
  const allValidators = queryResult.map(toValidator)

  return allValidators
}
