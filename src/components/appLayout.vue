<template>
  <v-app class="app">
    <Header @drawerOpen ="$refs.drawers.toggle()" v-if="!['Login'].includes($route.name)"/>
    <Drawers ref="drawers" />
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/header.vue';
import Drawers from '@/components/drawers.vue';

export default {
  components:{
    Header, Drawers
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>

</style>