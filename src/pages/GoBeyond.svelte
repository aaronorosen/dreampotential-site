<style>
  section {
    width: 100%;
    min-height: 100vh;
    background: url(/assets/Hero-Graphic-01.png) no-repeat;
    background-position-x: right;
    background-size: 40%;
    color: var(--third);
    padding: var(--offset, 150px);
    padding-top: 170px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: flex-start;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* padding-top: 5rem; */
    min-height: 800px;
  }
  h2 {
    font-size: 3rem;
    padding: 0;
    margin: 3rem 0;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0;
    font-weight: 100;
    letter-spacing: 1px;
  }
  @media (max-width: 1100px) {
    section {
      padding-left: 75px;
      padding-right: 75px;
    }
  }
  @media (max-width: 700px) {
    section {
      background-size: calc(600px - 30vw);
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  @media (max-width: 320px) {
    section {
      padding-top: 200px;
    }
  }
</style>

<section>
  <div class="wrapper">
    <div class="space-vertical">
      <h2>Go beyond.</h2>
    </div>
    <p>
      Dream Potential serves conscious entrepreneurs in their ambitions to make
      meaningful impacts in the sectors of education, e-commerce, and media.
    </p>
    <p>&nbsp;</p>
    <p>
      Our team delivers expertise in technology, data analysis, design, user
      experience and branding.
    </p>
    <h3>Why Dream Potential?</h3>
    <p>
      We envision a future where solutions are forged through cooperation and a
      sharing of vital resources. We believe that people can only achieve their
      potential when they are brought together as equals. We reject the
      winner-take-all mentality — everyone can win.
    </p>
    <h3>Unique to Dream Potential</h3>
    <p>
      Entrepreneurs who are accepted to the Dream Potential Accelerator receive
      a stake in the parent company. This is the key component to our anti
      fragile design. With a collective stake we can ensure that every player
      has skin in the game at all levels.
    </p>
  </div>
</section>
