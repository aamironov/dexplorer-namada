import BigNumber from 'bignumber.js'

// PLACEHOLDER
type Unique = {
  uuid: string
}

export type Validator = Unique & {
  name: string
  homepageUrl: string
  votingPower?: BigNumber
  commission: BigNumber
  description: string
}
