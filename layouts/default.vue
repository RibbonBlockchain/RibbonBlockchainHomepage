<template>
  <div>
    <Nav />
    <div class="se-pre-con"></div>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from "~/components/Nav/Index.vue";
import Footer from "~/components/Footer/Index.vue";
export default {
  components: {
    Nav,
    Footer
  }
};
</script>