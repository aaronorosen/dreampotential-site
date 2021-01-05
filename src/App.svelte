<script>
  import { onMount } from "svelte";
  import page from "page";
  import {Home, Team, Page, Labs, Education} from './pages'

  let active = Home;

  page.start();

  page("*", (c, next) => {
    scrollTo(0, 0);
    next();
  });

  page("/", (context) => {
    active = Home;
  });
  // page("/philosophy", (context) => {
  //   active = GoBeyond;
  // });
  page("/labs", (context) => {
    active = Labs;
  });
  page("/education", (context) => {
    active = Education;
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
