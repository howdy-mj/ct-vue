<template>
  <div class="all">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { Header } from './components';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style scoped>
@import './styles/_base.scss';

.all {
  height: 100vh;
}
</style>
