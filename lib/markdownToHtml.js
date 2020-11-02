// https://github.com/vercel/next.js/blob/9c65c994cc716ad73c8e84f526f962459d06ef43/examples/blog-starter/lib/markdownToHtml.js

import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
