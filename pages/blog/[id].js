import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return(
    <div>
      <h1>{postData.title}</h1>
      <br />
      <h2>{postData.id}</h2>
      <br />
      <h3>{postData.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>

  )
}