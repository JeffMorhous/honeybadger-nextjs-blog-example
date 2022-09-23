import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeff's Blog</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Blog</h2>
        <ul className={styles.description}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
