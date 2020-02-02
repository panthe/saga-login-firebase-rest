import * as React from 'react';

const Page404: React.SFC = () => {
  return (
    <section className="section has-background is-large">
      <div className="container">
        <div className="has-text-centered">
          <p></p>
          <h1 className="title"> Page not found </h1>
          <h2 className="subtitle"> How did you even end up here? </h2>
          <p />
          <p>
            <a className="button is-primary is-medium" href="/">
              Bring me back
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page404;
