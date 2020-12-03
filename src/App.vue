<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/appLayout.vue';

export default {
  name: "App",
  components:{
    AppLayout,
  },
};
</script>
