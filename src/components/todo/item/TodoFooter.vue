<template>
  <div>
    <i class="TodoFooter_Clear fas fa-trash fa-3x" @click="allDeleteItem"></i>
  </div>
</template>

<script>
export default {
  name:'TodoFooter',
  methods: {
    allDeleteItem() {
      localStorage.clear();
      location.reload();
    }
  }
}
</script>

<style>
.TodoFooter_Clear {
  color: darkolivegreen;
  margin-left: 630px;
}
</style>