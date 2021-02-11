<script>
  import { onMount } from "svelte";

  export let navbarHeight = 0;
  let scrollY;
  let homeLink;

  onMount(() => setTimeout(resize, 20));

  function resize(event) {
    document.body.style.setProperty(
      "--offset",
      `${homeLink.offsetLeft > 100 ? 136 : homeLink.offsetLeft}px`
    );
  }
</script>

<style src="./navbar.css">
</style>

<svelte:window bind:scrollY on:resize={resize} />
<nav class:bg={scrollY > 150} bind:clientHeight={navbarHeight}>
  <div class="wrapper">
    <a href="/" class="logo">
      <img
        src="/assets/DP-Icon-01.png"
        alt=""
        on:click={() => homeLink.click()}
        on:load={resize} />
      <span bind:this={homeLink}>Dream Potential</span>
    </a>
    <div class="menu">
      <!-- <a href="/philosophy">Philosophy</a> -->
      <a href="/labs">Labs</a>
      <a href="/education">Education</a>
      <!-- <a href="/team">TEAM</a> -->
      <a class="bordered" href="/join">Join US</a>
    </div>
  </div>
</nav>
