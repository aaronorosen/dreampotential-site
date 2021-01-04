<script>
  import {Navbar, Footer} from "../../components";
  
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
