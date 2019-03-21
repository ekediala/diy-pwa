<template>
  <recipe recipe="Bleach Making">
    <template v-slot:image>
      <div>
        <img src="../assets/img/bleach-147520_1280.png" alt="Bleach Making image">
      </div>
    </template>

    <template v-slot:credits>
      <div>
        Image by
        <a
          href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147520"
        >OpenClipart-Vectors</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=147520"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients class="diy-centered">
          <water>30 litres</water>
          <chlorine>2 kg</chlorine>
          <light-ash>2 kg</light-ash>
          <caustic-soda>0.25 (1/4) kg</caustic-soda>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution></precaution>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Collect the water in a bowl.</procedure>
          <procedure>Add chlorine and stir properly.</procedure>
          <procedure>Add soda ash and stir properly.</procedure>
          <procedure>Add caustic soda and stir properly.</procedure>
          <procedure>Leave the mixture for two (2) to three (3) minutes.</procedure>
          <procedure>Congratulations! Your "was white" clothes have hope now.</procedure>
          <procedure>Note: There is usually some residue from the mixture. It can be used to wash tiles.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "Whitener"
};
</script>

