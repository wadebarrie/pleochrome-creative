import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Brand Development',
    content: () => (
      <>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  {
    title: 'Logo Design',
    content: () => (
      <>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  {
    title: 'Copyrighting and Editing',
    content: () => (
      <>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  // {
  //   title: 'How does do I future-proof my website?',
  //   content: () => (
  //     <>
  //       Do not build a website with last decade’s tech. The future of the web is
  //       mobile, JavaScript and APIs—the{` `}
  //       <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
  //       Every website is a web app and every web app is a website. Gatsby.js is
  //       the universal JavaScript framework you’ve been waiting for.
  //     </>
  //   ),
  // },
  // {
  //   title: 'What exactly does Gatsby build?',
  //   content: () => (
  //     <>
  //       Gatsby.js is a static PWA (Progressive Web App) generator. You get code
  //       and data splitting out-of-the-box. Gatsby loads only the critical HTML,
  //       CSS, data, and JavaScript so your site loads as fast as possible. Once
  //       loaded, Gatsby prefetches resources for other pages so clicking around
  //       the site feels incredibly fast.
  //     </>
  //   ),
  // },
];

const Faq = () => (
  <Section id="services">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Services I Offer</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
