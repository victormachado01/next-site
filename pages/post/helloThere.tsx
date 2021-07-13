import Image from 'next/image'
import Head from 'next/head'

const Hello = () => {
  return (
    <>
      <Head>
        <title>Hello There :: My Blog</title>
        <meta property="og:title" content="Hello there :: My Blog" />
      </Head>
      <article>
        <h1>Hello, There!</h1>
        <Image
          src='/post/hello-there/post.jpg'
          width={900}
          height={600}
          quality="100"
          layout="responsive"
        />
      </article>
    </>
  )
}

export default Hello;