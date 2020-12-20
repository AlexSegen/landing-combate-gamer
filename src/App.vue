<template>
  <div id="top">
    <Header :isScrolling="isScrolling"/>
    <router-view/>
    <GoTop :isScrolling="isScrolling"/>
    <Footer/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
      return {
          isScrolling: false
      }
  },
  mounted() {
      const _this = this;
      window.onscroll = function() {
          _this.detectScroll()
      };
  },
  methods: {
      detectScroll() {
          if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
              this.isScrolling = true;
          } else {
              this.isScrolling = false;
          }
      }
  }
}
</script>
