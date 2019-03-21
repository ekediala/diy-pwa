<template>
  <div>
    <li>
      <p>Please read safety precautions above,
        <router-link
          to="/#alert"
        >our safety procedures and disclaimer before proceeding as we won't be liable for any loss, health or otherwise.</router-link>
      </p>
    </li>
  </div>
</template>

<script>
export default {
  name: "Safety"
};
</script>

<style scoped>
     li {
        font-size: 20px;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }
</style>
