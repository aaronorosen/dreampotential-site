<script>
  import {Navbar, Footer} from "../../components";
  
  let navbarHeight;
</script>

<style>
  main {
    background: linear-gradient(to bottom, var(--first-color), var(--second-color));
    animation: fadein 700ms;
  }
</style>

<main style="--navbar-height: {navbarHeight}px;">
  <Navbar bind:navbarHeight />
  <slot />
  <Footer />
</main>
