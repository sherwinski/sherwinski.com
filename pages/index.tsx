import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Avatar from "../components/avatar";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
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
              <h1>Welcome 👋</h1>
              <p>Here's a space for my thoughts and random film photography.</p>
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

export default Blog;

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
