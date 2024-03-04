import superjson from 'superjson'
import Korea from '@/service/korea'

const korea = new Korea()

export default defineEventHandler(async () => {
  let kospi = await korea.getKospi()
  let kosdaq = await korea.getKosdaq()

  return superjson.stringify({
    kospi,
    kosdaq,
    date: korea.getDate(),
    standard: korea.standard
  }) as unknown
})