// import Head from 'next/head'
import Container from '../components/container.js'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export default function Posts({ allPosts }) {
  return (
    <>
      <Container>
        <ul>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
