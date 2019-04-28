<template>
  <ul>
    <safety />
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ProcedureList',
};
</script>

<style scoped>
ul {
  text-align:justify;
  hyphens: auto;
}
</style>
