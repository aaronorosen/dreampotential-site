<script>
  import { onMount } from "svelte";

  let scrollY;
  let homeLink;

  onMount(() => setTimeout(resize, 20));

  function resize(event) {
    document.body.style.setProperty(
      "--offset",
      `${homeLink.offsetLeft || 150}px`
    );
  }
</script>

<style>
  a {
    color: var(--third);
    text-decoration: none;
    text-transform: uppercase;
  }
  a.bordered {
    border: 2px solid var(--third);
    letter-spacing: 3.36px;
    font-weight: bold;
    padding: 0.3rem;
    padding-bottom: 0.1rem;
    border-radius: 5px;
    text-decoration: none !important;
  }
  nav {
    z-index: 100;
    position: absolute;
    /* position: fixed; */
    top: 0;
    width: 100%;
    height: 150px;
    background: transparent;
    box-sizing: border-box;
    padding: 35px 4vw;
    color: var(--third);
    transition: background 500ms;
    font-family: "Yanone Kaffeesatz", sans-serif;
    letter-spacing: 0;
  }
  nav.bg {
    /* background: var(--first-half); */
    background: transparent;
  }
  .wrapper {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    height: 100%;
    flex-flow: wrap;
  }
  .wrapper div {
    flex-basis: 60%;
  }
  .logo {
    flex-basis: 40% !important;
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .logo a {
    margin-top: 0.2rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
  .logo img {
    max-height: 3.6rem;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .menu a {
    margin: 0 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  .menu a:hover {
    text-decoration: underline;
  }
  @media (max-width: 1100px) {
    nav {
      height: 160px;
    }
    .wrapper div,
    .logo {
      flex-basis: 100% !important;
    }
    .logo a {
      font-size: 1.6rem;
    }
    .menu a {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 700px) {
    nav {
      height: max-content;
      /* background: var(--first-half); */
    }
    .logo img {
      max-height: 3rem;
    }
    .logo a {
      font-size: 1.4rem;
    }
    .menu a {
      font-size: 1rem;
      flex-grow: 1;
      text-align: center;
      padding: 0.5rem;
    }
    .menu {
      margin-top: 2rem;
      flex-flow: wrap;
    }
  }
</style>

<svelte:window bind:scrollY on:resize={resize} />
<nav class:bg={scrollY > 150}>
  <div class="wrapper">
    <div class="logo">
      <img
        src="/assets/DP-Icon-01.png"
        alt=""
        on:click={() => homeLink.click()}
        on:load={resize} />
      <a href="/" bind:this={homeLink}>Dream Potential</a>
    </div>
    <div class="menu">
      <!-- <a href="/philosophy">Philosophy</a> -->
      <a href="/labs">Labs</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/team">TEAM</a>
      <a class="bordered" href="/join">Join US</a>
    </div>
  </div>
</nav>
