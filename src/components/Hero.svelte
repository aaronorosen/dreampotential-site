<script>
  import Paras from './Paras.svelte'
</script>

<style>
  section {
    width: 100%;
    min-height: 100vh;
    background: url(/assets/Hero-Graphic-01.png) no-repeat;
    background-position-x: right;
    background-size: 37%;
    color: var(--third);
    padding: var(--offset, 150px);
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
    gap: 40px;
    box-sizing: border-box;
    padding-top: 5rem;
    min-height: 550px;
  }
  h2 {
    font-size: 2.2rem;
    padding: 0;
    margin: 0;
  }
  h2:not(:first-child) {
    margin-left: 3rem;
  }
  p {
    font-size: 1.3rem;
    max-width: 600px;
  }
  .button {
    width: max-content;
    background: transparent;
    border: 0.2rem solid var(--third);
    border-radius: 0.3rem;
    font-size: 1.6rem;
    color: var(--third);
    padding: 0.4rem 0.8rem 0.2rem 0.8rem;
    font-family: var(--font-second);
    letter-spacing: 0.1rem;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    section {
      background-size: 50%;
      padding-left: 75px;
      padding-right: 75px;
    }
  }
  @media (max-width: 700px) {
    h2:not(:first-child) {
      margin-left: 0;
    }
    section {
      background-size: calc(600px - 30vw);
      padding-left: 25px;
      padding-right: 25px;
    }
  }
  @media (max-width: 600px) {
    section {
      padding-top: calc(var(--offset, 150px) * 2);
    }
  }
</style>

<section>
  <div class="wrapper">
    <div class="space-vertical">
      <h2>Bring us your dreams.</h2>
      <h2>We’ll make them a reality.</h2>
    </div>
    <p>
      We serve conscious entrepreneurs in their ambitions to make meaningful
      impact in education, e-comerce and media.
    </p>
    <a href="/join" class="button">JOIN US</a>
  </div>
  <Paras />
</section>
