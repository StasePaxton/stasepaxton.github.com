// https://github.com/vercel/next.js/blob/9c65c994cc716ad73c8e84f526f962459d06ef43/examples/blog-starter/components/date-formatter.js
import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	do, yyyy')}</time>
}
