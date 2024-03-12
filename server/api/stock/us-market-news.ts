import axios from 'axios'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const ticker: string = query.ticker as string

  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=JX88ACQXMG5745YH`
  let res = {} as any
  try {
    res = await axios({ url, timeout: 5000 })

    if (!res || !res['data']) {
      return { news: {} } as unknown
    }

    if (res['data']['Information']) {
      console.log('[Res-info]', res['data']['Information'])
      return { news: {} } as unknown
    }

  } catch (err) {
    console.log('[ERR]', err)
    return { news: {} } as unknown
  }

  return { news: res['data']['feed'] } as unknown
})