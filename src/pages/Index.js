import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Dhruv Doshi's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">What are you looking for?</Link></h2>
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            <Link to="/research">research work</Link>, {' '}
            <Link to="/pictures">pictures</Link>, {' '}
            view <a href="https://blog.doshidhruv.com" target="_blank" rel="noreferrer">blogs</a>, {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
          {/* <p> Source available <a href="https://github.com/dhruvdoshi/vishalrakesh.github.io/">here</a>.</p> */}
        </div>
      </header>
      <h2>Latest Updates!!</h2>
      <p> Please find the lastest blogs <a href="https://blog.doshidhruv.com" target="_blank" rel="noreferrer">here</a> .</p>
    </article>
  </Main>
);

export default Index;
