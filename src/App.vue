<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Header } from './components';

  const App = {
    components: {
      Header
    },
  };

  export default App;

</script>
<style>

</style>