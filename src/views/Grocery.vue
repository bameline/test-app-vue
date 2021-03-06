<template>
  <div class="grocery">
    <GroceryList />
  </div>
</template>

<script>
// @ is an alias to /src
import GroceryList from '@/components/grocery/GroceryList.vue'

export default {
  name: 'Grocery',
  components: {
    GroceryList
  }
}
</script>
