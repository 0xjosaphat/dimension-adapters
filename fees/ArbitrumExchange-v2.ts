
import adapter from '../dexs/ArbitrumExchange'
const { breakdown,  ...rest } = adapter

export default {
  ...rest,
  adapter: breakdown['v2'],
}