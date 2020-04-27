<template>
  <div class="home">
    <FrontPage msg="ok"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FrontPage from '@/components/FrontPage.vue'

export default {
  name: 'Home',
  components: {
    /*HelloWorld,*/ FrontPage,
  }
}
</script>
