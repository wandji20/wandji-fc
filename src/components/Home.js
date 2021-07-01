import React from 'react';

const Home = () => (
  <section className="d-flex justify-content-between">
    <div className="w-75 news d-flex flex-column container">
      <h3>Latest News</h3>
      <div className="articles row">
        <article className="article col-12">
          article 1
        </article>
        <article className="col-sm-12 col-md-4">article 2</article>
        <article className="col-sm-12 col-md-4">article 3</article>
        <article className="col-sm-12 col-md-4">article 4</article>
        {/* <div className="row d-flex justify-content-center mt-100">
          </div> */}
      </div>
    </div>
  </section>
);

export default Home;
