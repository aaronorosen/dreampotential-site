<script>
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<style>
  main {
    background: linear-gradient(to bottom, var(--first), var(--second));
    min-height: calc(100vh - 150px);
  }
</style>

<main>
  <Navbar />
  <slot />
  <Footer />
</main>
