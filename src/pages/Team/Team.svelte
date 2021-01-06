<script>
  let members = [
    {
      bg: "/assets/SAurabh-Kulkarni.jpg",
      name: "Saurabh Kulkarni",
    },
    {
      bg: "/assets/Aaron-Rosen.jpg",
      name: "Aaron Rosen",
    },
    {
      bg: "/assets/MikhailPresenting.jpg",
      name: "Mikhail Holst",
    },
    {
      bg: "/assets/Prakash-Kunda.jpg",
      name: "Satya Narayana",
    },
    {
      bg: "/assets/Neil Freese.jpg",
      name: "Neil Freese",
    },
    {
      bg: "",
      name: "TEAMMATE",
    },
  ];

  let minHeight;
  function resize() {
    const member = document.querySelector(".member img");
    if (member) {
      minHeight = member.offsetHeight;
    }
  }
</script>

<style src="./team.css">
</style>

<svelte:window on:resize={resize} />

<section>
  <div class="members">
    {#each members as member}
      <div
        class="member"
        style={member.bg ? '' : `min-height: ${minHeight || 0}px;`}>
        <span>{member.name}</span>
        <img src={member.bg} alt="" on:load={resize} />
      </div>
    {/each}
  </div>
</section>
