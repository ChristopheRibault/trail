<template>
  <div class="header-right">
    <p class="header-right__item header-right__date">{{ formatDate }}</p>
    <p class="header-right__item header-right__text">Lorem Ipsum</p>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'date-trail',
    data: () => ({
      date: '08-22-2021',
    }),
    computed: {
      formatDate() {
        return moment(this.date).locale('fr').format('DD MMMM YYYY');
      },
    },
  };

</script>

<style lang="scss">
  @import '../stylesheets/settings/colors.scss';

  .header-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 2;

    &__item {
      text-align: center;
      margin: 0;
      padding: 2px;
      flex: 1;
      border-bottom: black solid 1px;
      line-height: 45px;
    }

    &__date {
      background: $buttons-color;
      text-transform: uppercase;
      color: white;
      font-weight: bold;
      font-size: 1.3em;
    }

    &__text {
      background: white;
    }
  }

</style>