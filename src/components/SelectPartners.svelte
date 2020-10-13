<style>
  section {
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 70px;
  }
  .heading,
  .closing {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    gap: 2rem;
  }
  .heading {
    margin-bottom: 2rem;
  }
  .closing {
    margin-top: 5rem;
    max-width: 550px;
    gap: 4rem;
  }
  .closing img {
    width: 90px;
  }
  .hr {
    border: 1px solid white;
    flex-basis: 100%;
  }
  h2 {
    min-width: max-content;
    color: white;
  }
  .partners {
    display: flex;
    flex-flow: wrap;
    margin: 0 auto;
    /* justify-content: center; */
    gap: 0.5rem;
  }
  .partner {
    flex-basis: 32%;
    min-width: 300px;
    max-width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .partner:hover {
    background: var(--fourth);
  }
  .partner img {
    width: 300px;
  }
  .partner .smaller {
    width: 150px;
  }
  @media (max-width: 1100px) {
    .partner {
      flex-grow: 1;
    }
  }
</style>

<section>
  <div class="heading">
    <div class="hr" />
    <h2>SELECT PARTNERS</h2>
    <div class="hr" />
  </div>
  <div class="partners">
    <div class="partner">
      <img src="/assets/DP-Logos-01.svg" alt="" />
    </div>
    <div class="partner">
      <img src="/assets/DP-Logos-03.svg" alt="" />
    </div>
    <div class="partner">
      <img class="smaller" src="/assets/I-AM-Logo-04.svg" alt="" />
    </div>
    <div class="partner">
      <img src="/assets/DP-Logos-02.svg" alt="" />
    </div>
    <div class="partner">
      <img class="smaller" src="/assets/Viaduct-Logo-05.svg" alt="" />
    </div>
  </div>
  <div class="closing">
    <div class="hr" />
    <img src="/assets/Circles-01.svg" alt="" />
    <div class="hr" />
  </div>
</section>
