import Header from "Components/header";
import LogoSlider from "Components/logo-slider";
import TimeLine from "Components/timeline";
import Head from "next/head";
import css from "styled-jsx/css";
import { prefix } from "utils/const";
import Layout from "Wrappers/layout";

const HomePageStyle = css`
  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card {
    flex-basis: 32vw;
    padding: 2.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: rgb(129 140 248);
  }

  .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
  }

  .card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Layout {...{ Header }}>
        <div className="section p-8 md:p-0">
          <div className="header">
            <div className="header-title">
              <h3 className="text-2xl text-teal-500 tracking-wides font-semibold font-header">
                Experiences
              </h3>
            </div>
            <div className="header-subtitle">
              <p className="text-4xl tracking-wides font-semibold font-header">
                I have worked in corporate
                <br /> and startup company.
              </p>
            </div>
          </div>
        </div>
        <div className="section px-8 md:px-0">
          <TimeLine />
        </div>
      </Layout>
      <hr className="mt-24" />
      <div className="my-personal-project bg-violet-100 bg-opacity-50">
        <div className="container mx-auto py-24">
          <div className="header mb-12 p-8 md:p-0">
            <div className="header-title mb-6">
              <h3 className="text-6xl text-indigo-400 tracking-wides font-semibold font-header">
                My Personal <br /> Project
              </h3>
            </div>
            <div className="header-subtitle">
              <p className="text-3xl text-base-2 tracking-wides font-normal font-header">
                I've watched some tutorial on Internet and I create my own
                exercise.
              </p>
            </div>
          </div>
          <div className="content px-8 md:px-0">
            <div className="grid gap-8 grid-cols-2">
              <a
                href="https://nextjs.org/docs"
                className="card backdrop-blur-xl bg-white/50 shadow-2xl shadow-purple-200/50"
              >
                <h3>React Context LocalStorage Boilerplate &rarr;</h3>
                <p className="text-base-2">
                  Find in-depth information about Next.js features and API.
                </p>
              </a>

              <a
                href="https://nextjs.org/learn"
                className="card backdrop-blur-xl bg-white/50 shadow-2xl shadow-purple-200/50"
              >
                <h3>Module Federation (React x Vue) &rarr;</h3>
                <p className="text-base-2">
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card backdrop-blur-xl bg-white/50 shadow-2xl shadow-purple-200/50"
              >
                <h3>Examples &rarr;</h3>
                <p className="text-base-2">
                  Discover and deploy boilerplate example Next.js projects.
                </p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card backdrop-blur-xl bg-white/50 shadow-2xl shadow-purple-200/50"
              >
                <h3>Deploy &rarr;</h3>
                <p className="text-base-2">
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Layout>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src={`${prefix}/vercel.svg`} alt="Vercel" className="logo" />
          </a>
        </footer>
      </Layout>
      <style jsx global>{`
        body {
          background-image: ${process.env.NODE_ENV === "production" ? `var(--bg-url-header-home)` : `var(--bg-url-header-local-home)`};
        }
      `}</style>
      <style jsx>{HomePageStyle}</style>
    </>
  );
}
