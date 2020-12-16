<style>
  footer {
    flex-grow: 0;
    height: 170px;
    background: var(--first);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5rem;
    font-family: var(--font-second);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }
  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .button {
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    color: white;
    text-decoration: none;
    border: 0.2rem solid var(--third);
    border-radius: 0.4rem;
    font-size: 1.3rem;
  }
  @media (max-width: 700px) {
    footer {
      padding: 0 2rem;
    }
  }
  @media (max-width: 320px) {
    footer {
      padding: 0 1rem;
    }
    span {
      font-size: 6vw;
    }
    .button {
      font-size: 5vw;
    }
  }
</style>

<footer>
  <span>Dream Potential</span>
  <a class="button" href="/join">Join Us</a>
</footer>
