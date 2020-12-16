<style>
  .wrapper {
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: 100;
    justify-content: space-between;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    justify-content: space-between;
  }
  span {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  p {
    flex-basis: 80%;
    line-height: 1.7;
  }
  @media (max-width: 700px) {
    p {
      flex-basis: 100%;
    }
  }
  span > div {
    width: 100%;
  }
  span a {
    background: #ffffff22;
    color: white;
    font-size: 1rem;
    padding: 0.6rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
  }
  @media (max-width: 400px) {
    .wrapper {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
    }
    span a {
      font-size: 5vw;
    }
  }
</style>

<div class="wrapper">
  <span>
    <p>
      Dream Potential is an accelerator program and technology collective. Some
      other information goes here that mentions something really cool.
    </p>
    <div><a href="#connect">Apply Accelerator Program</a></div>
  </span>

  <span>
    <p>
      Bring your Vision we manifest your projects. Some other information goes
      here that mentions something really cool.
    </p>
    <div><a href="#connect">Build Vision</a></div>
  </span>

  <span>
    <p>
      Not sure what how to enhance your organization or business. Some other
      information goes here that mentions something really cool.
    </p>
    <div><a href="#connect">Get in Touch</a></div>
  </span>
</div>
