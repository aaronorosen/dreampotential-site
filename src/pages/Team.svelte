<script>
  let members = [
    {
      bg: "/assets/SAurabh-Kulkarni.png",
      name: "Saurabh Kulkarni",
    },
    {
      bg: "/assets/Aaron-Rosen.png",
      name: "Aaron rosen",
    },
    {
      bg: "/assets/MikhailPresenting.jpeg",
      name: "Mikhail Holst",
    },
    {
      bg: "/assets/Prakash-Kunda.png",
      name: "Satya narayana",
    },
    {
      bg: "/assets/Neil Freese.png",
      name: "Neil Freese",
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

<style>
  section {
    min-height: calc(100vh - 300px);
    margin-top: 150px;
    margin-top: var(--navbar-height);
  }
  .members {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
  .member {
    position: relative;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    background: #da7d62;
  }
  .member img {
    max-width: 100%;
  }
  .member span {
    position: absolute;
    text-transform: uppercase;
    color: white;
    bottom: 33%;
    margin-left: -33%;
    font-weight: bold;
    z-index: 11;
  }
  @media (max-width: 1100px) {
    .members {
      max-width: 100%;
    }
  }
  @media (max-width: 600px) {
    .members {
      display: flex;
      flex-direction: column;
    }
    .member {
      min-height: 0;
    }
    .member span {
      font-size: 5vw;
    }
  }
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
