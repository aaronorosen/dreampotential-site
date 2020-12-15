<script>
  import { onMount } from "svelte";
  import page from "page";
  import Home from "./pages/Home.svelte";
  import GoBeyond from "./pages/GoBeyond.svelte";
  import Team from "./pages/Team.svelte";
  import Page from "./pages/Page.svelte";
  import Labs from "./pages/Labs.svelte";

  let active = Home;

  page.start();

  page("*", (c, next) => {
    scrollTo(0, 0);
    next();
  });

  page("/", (context) => {
    active = Home;
  });
  page("/philosophy", (context) => {
    active = GoBeyond;
  });
  page("/labs", (context) => {
    active = Labs;
  });
  page("/team", (context) => {
    active = Team;
  });

  page("*", () => page.redirect("/"));

  onMount(() => {
    page.replace(location.pathname);
  });
</script>

<Page>
  <svelte:component this={active || Home} />
</Page>
