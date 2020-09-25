<template>
  <div class="navbar">
    <NavbarBtn 
      v-for = 'page in pages'
      :key = 'page.id'
      :page = 'page'
    >{{ page.title }}</NavbarBtn>
  </div>
</template>

<script>
  import NavbarBtn from './NavbarBtn.vue';

  export default {
    name: 'navbar',
    components: {
      NavbarBtn,
    },

    data: () => ({
      pages: [
        { id: 0, title: 'Accueil', to: '/' },
        { id: 1, title: 'Infos', to: '/info' },
        { id: 2, title: 'Parcours', to: '/itineraries' },
        { id: 3, title: 'Résultats', to: '/results' },
        { id: 4, title: 'Galerie', to: '/gallery' },
        { id: 5, title: 'Contact', to: '/contact' },
      ]
    })
  };

</script>

<style lang="scss">
  .navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    flex-grow: 3;

    margin: 2px;
  }
</style>
