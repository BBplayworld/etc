import axios from 'axios'
import { useMarketNewsStore } from '@/stores/stock/usMarketNews'

export default defineEventHandler(async (event) => {
  const marketNewsStore = useMarketNewsStore()
  const query = getQuery(event)
  const ticker: string = query.ticker as string

  if (marketNewsStore.news[ticker]) {
    return {
      news: marketNewsStore.news[ticker]
    } as unknown
  }

  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=JX88ACQXMG5745YH`
  let res = {} as any
  try {
    res = await axios({ url, timeout: 4000 })

    if (res['data']['Information']) {
      console.log('[Res-info]', res['data']['Information'])
      return { news: {} } as unknown
    }

    marketNewsStore.cacheNews(ticker, res['data']['feed'])
  } catch (err) {
    console.log('[ERR]', err)
    return { news: {} } as unknown
  }

  return { news: res['data']['feed'] } as unknown
})