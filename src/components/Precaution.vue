<template>
  <div>
    <v-alert
      class="alert"
      color="darkcyan"
      :value="true"
    >
      <h3 class="headline">
        <b>Precautions</b>
      </h3>
      <v-divider></v-divider>
      <ul class="align-justify">
        <li>
          <p>
            <em>
              <slot />
            </em>
          </p>
        </li>

        <li>
          <p>
            <em>*Ensure to wear protective equipments.</em>
          </p>
          <p>
            <em>
              You are dealing with chemicals; wear safety gloves, nose guards,
              laboratory coats, etc. <br />Ensure your workspace is safe for you
              and your environment.
            </em>
          </p>
        </li>
        <li>
          <p>
            <em>
              By proceeding with the procedures below, you agree you are
              responsible for your safety, and also that any loss / liability
              incurred is completely your responsibility. We do not offer any
              guarantees on the correctness / safety of the procedures listed
              below.
            </em>
          </p>
        </li>
      </ul>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Precaution',
};
</script>

<style src="../assets/css/alert.css" scoped>
</style>
