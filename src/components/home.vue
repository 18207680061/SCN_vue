<template>
 <main>
   <v-search></v-search>
   <v-content></v-content>
   <v-footInfo></v-footInfo>
   <v-footer></v-footer>
 </main>
</template>
<script>
  import vfooter from '../components/index/foot-nav.vue';
  import vsearch from '../components/index/head-search.vue';
  import vcontent from '../components/index/content-box.vue';
  import footerInfo from '../components/index/footerInfo.vue';
  export default{
    components:{
      'v-footer':vfooter,
      'v-content':vcontent,
      'v-search':vsearch,
      'v-footInfo':footerInfo
    }
  }
</script>
