<template>
  <recipe recipe="Alcohol Based Air freshener.">
    <template v-slot:image>
      <div>
        <img
          rel="preload" as="image"
          src="../assets/img/air-freshener.jpg"
          alt="Air freshener image."
        >
      </div>
    </template>
    <template v-slot:credits>
      <div></div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
          <alcohol>2.5 litres</alcohol>
          <menthol-crystal>1/2 tablespoon.</menthol-crystal>
          <industrial-camphor>1/2 tablespoon</industrial-camphor>
          <fragrance types="5"/>
          <color/>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution>As you go higher in the homologous series of alcohol, the volatility (it's tendency to evaporate) increases.</precaution>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Mix fragrances.</procedure>
          <procedure>Add the mixture to the alcohol and stir vigorously.</procedure>
          <procedure>Add industrial camphor and shake.</procedure>
          <procedure>Add menthol crystal and shake vigorously.</procedure>
          <procedure>Add color and shake.</procedure>
          <procedure>Voila! Your room smells nice!</procedure>
          <procedure>Alcohol based air fresheners are more expensive than their water based counterparts.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "AlcoholBasedAirFreshener"
};
</script>