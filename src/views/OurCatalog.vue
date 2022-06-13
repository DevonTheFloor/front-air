<template>
  <MyHeader />
  <MyNav/>
  <p>Voici notre catalgue, en vous souhaitant une bonne navigation sur notre market place.</p>
  <Suspense>
    <p> {{ user }}</p>
  </Suspense>
  <p><strong>OUT SUSPENSE :</strong><br> {{ user }} </p>
</template>

<script>
import MyNav from '@/components/MyNav.vue'
import MyHeader from '@/components/MyHeader.vue'
import { ref } from 'vue'

export default {
  name: 'MarketPlace',
  components: {
    MyNav,
    MyHeader
  },
  
  setup () {
    const user = ref(null)
    fetch('https://api.github.com/users/devonthefloor')
    .then(response => response.json())
    .then(data => user.value = data)
     
    return {
      user
    }
    }

}
</script>

<style>

</style>