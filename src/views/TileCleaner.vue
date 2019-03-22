<template>
  <recipe recipe="Tile Cleaner Making">
    <template v-slot:image>
      <div>
        <img src="../assets/img/tile-cleaner.png" alt="Tile Cleaner Image">
      </div>
    </template>
    <template v-slot:credits>
      <div>Image by
        <a
          href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146221"
        >OpenClipart-Vectors</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146221"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
            <water>2 litres</water>
            <sls>200 g</sls>
            <hcl>1 litre</hcl>
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
          <procedure>
              Soak SLS in 1 litre of water for 24 hours.
          </procedure>
          <procedure>
              Add the rest of the water and stir very well.
          </procedure>
          <procedure>
              Add HCL and stir very well.
          </procedure>
          <procedure>
              Yup! Your product is ready.
          </procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "TileCleaner"
};
</script>