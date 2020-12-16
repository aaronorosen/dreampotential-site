<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  let navbarHeight;
</script>

<style>
  main {
    background: linear-gradient(to bottom, var(--first), var(--second));
    animation: fadein 700ms;
  }
</style>

<main style="--navbar-height: {navbarHeight}px;">
  <Navbar bind:navbarHeight />
  <slot />
  <Footer />
</main>
