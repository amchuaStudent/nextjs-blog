import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>My Impression on my 1st Month as a 3rd-year BSCPE Student</h2>
        <p> Through out these pass days I can safetly say that being a CPE student
          was the right choice. I feel as if I am now learning things that are actually
          useful in my profession as well as things that get me closer to my goal of making
          games. While there are some problems here and there with the schedule and programs
          required it all seemed to be worth it in the end but not with out hardship.
        </p>

        <p>These hardships include the various bugs you get from downloadign programs, the 
          hardware requirements that are not easy to find that being the logics gates we need,
          the logic reqruied to solve certain problems and the schedule given to us by the school.
          Don't get me wrong its not that its bad but rather unorthodox as the time given to us is 
          from morning till night. However this is all still manageable as the lessons gained will
          eventually create a solid foundation for us to have in our professional careers.
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}