<template>
  <v-alert color="darkcyan" style="color: black" type="warning" :value="true">
    <h3 class="headline">
      <b>Precautions.</b>
    </h3>
    <v-divider></v-divider>
    <ul>
      <li>
        <p>
          <b>
            <em>
              <slot/>
            </em>
          </b>
        </p>
      </li>

      <li>
        <p>
          <b>
            <em>*Ensure to wear protective equipments.</em>
          </b>
        </p>
        <p>
          <b>
            <em>You are dealing with chemicals; wear safety gloves, nose guards, laboratory coats, etc.
              <br>Ensure your workspace is safe for you and your environment.
            </em>
          </b>
        </p>
      </li>
      <li>
        <p>
          <b>
            <em>
              By proceeding with the procedures below, you agree you are responsible for your safety,
              and also that any loss / liability incurred is completely your responsibility. We do
              not offer any guarantees on the correctness / safety of the procedures listed below.
            </em>
          </b>
        </p>
      </li>
    </ul>
  </v-alert>
</template>

<script>
export default {
  name: "Precaution"
};
</script>