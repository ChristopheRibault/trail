<template>
  <div>
    <p>Itineraries</p>
    <img class="itineraries__map" :src=map_preview_src />
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => ({
      map_src: null,
      map_preview_src: null,
    }),

    async mounted () {
        const src = await axios
          .get('https://external-api.komoot.de/v007/tours/264436243')
          .then(res => {
            this.map_preview_src = res.data.map_image_preview.src.substring(0, res.data.map_image_preview.src.indexOf('?'));
            this.map_src = res.data.map_image.src.substring(0, res.data.map_image.src.indexOf('?'));
          })
          .catch(console.log)
      }
  };
</script>

<style lang="scss">
  .itineraries {
    &__map {
      // width: 100%;
    }
  }
</style>
