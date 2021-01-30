import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import Avatar from "../components/avatar";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts;
  return (
    <>
      <div>
        <Head>
          <title>sherwinski.com</title>
        </Head>
        <header id="header">
          <Avatar
              picture={"edit.png"}
          />
          <div className="content">
            <div className="inner">
              <h2>Welcome</h2>
              <p>A space for my thoughts and film photography</p>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="https://github.com/sherwinski">GitHub</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Layout>
        <Container>
          <Intro
            id={"blog"}
          />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
