<template>
  <v-alert style="color: black" type="warning" :value="true">
    <h3 class="headline">Precautions.</h3>
    <v-divider></v-divider>
    <p>
      <b>
        <em>*Ensure to wear protective equipments.</em>
      </b>
    </p>

    <p>
      By proceeding with the procedures below, you agree you are responsible for your safety,
      and also that any loss / liability incurred is completely your responsibility. We do
      not offer any guarantees on the correctness of the procedures.
    </p>
    <p>You are dealing with chemicals; wear rubber gloves, nose guards, and lab coats. Ensure your workspace is safe for you and your environment.</p>
    <p>
      <slot/>
    </p>
  </v-alert>
</template>

<script>
export default {
  name: "Precaution"
};
</script>