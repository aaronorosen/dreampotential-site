<script>
  import AboutProject from "./AboutProject.svelte";
  import PartnerOverlay from "./PartnerOverlay.svelte";

  const partners = [
    {
      name: "Neighbormade",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/DP-Logos-01.png",
    },
    {
      name: "Manifest Now",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/DP-Logos-03.svg",
    },
    {
      name: "IAM",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/I-AM-Logo-04.svg",
      imageWith: "150",
    },
    {
      name: "Connective Places",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/DP-Logos-02.svg",
    },
    {
      name: "Viaduct",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/Viaduct-Logo-05.svg",
      imageWith: "150",
    },
    {
      name: "No Scroll Dream Reader",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/NoScrollDreamReader.png",
      imageWith: "100",
    },
    {
      name: "RePicture",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/RePicture.png",
      imageWith: "180",
    },
    {
      name: "AgentStat",
      about: [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor
        quos suscipit. Suscipit, natus. Aspernatur magni, dignissimos sit
        eveniet sunt voluptates alias. Debitis distinctio omnis odio excepturi
        quos eos amet dolores recusandae et, beatae saepe nihil modi
        perferendis, quis consequuntur?`,
      ],
      img: "/assets/AgentStat.png",
      imageWith: "180",
    },
  ];

  let activePartner = -1;
</script>

<style>
  section {
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 70px;
  }
  .heading,
  .closing {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    gap: 2rem;
  }
  .heading {
    margin-bottom: 2rem;
  }
  .closing {
    margin-top: 5rem;
    max-width: 550px;
    gap: 4rem;
  }
  .closing img {
    width: 90px;
  }
  .hr {
    border: 1px solid white;
    flex-basis: 100%;
  }
  h2 {
    min-width: max-content;
    color: white;
  }
  .partners {
    display: flex;
    flex-flow: wrap;
    margin: 0 auto;
    gap: 0.5rem;
  }
  .partner {
    flex-basis: 32%;
    min-width: 300px;
    max-width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .partner:hover {
    background: var(--fourth);
  }
  .partner img {
    max-width: 70vw;
    width: 300px;
    user-select: none;
  }
  @media (max-width: 1100px) {
    .partner {
      flex-grow: 1;
    }
  }
</style>

<section>
  <div class="heading">
    <div class="hr" />
    <h2>SELECT PARTNERS</h2>
    <div class="hr" />
  </div>
  <div class="partners">
    {#each partners as partner, index}
      <div class="partner" on:click={() => (activePartner = index)}>
        <img
          style={partner.imageWith ? `width: ${partner.imageWith}px` : ''}
          src={partner.img}
          alt="" />
      </div>
      {#if index === activePartner}
        <PartnerOverlay on:close={() => (activePartner = -1)}>
          <AboutProject {partner} on:close={() => (activePartner = -1)} />
        </PartnerOverlay>
      {/if}
    {/each}
  </div>
  <div class="closing">
    <div class="hr" />
    <img src="/assets/Circles-01.svg" alt="" />
    <div class="hr" />
  </div>
</section>
