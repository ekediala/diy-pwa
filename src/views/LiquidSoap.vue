<template>
  <recipe recipe="Liquid Soap Making">
    <template v-slot:image>
      <div>
        <img src="../assets/img/soap-dispenser-2337697_1920.jpg" alt="Liquid Soap making"/>
      </div>
    </template>
    <template v-slot:credits>
      <div>
        Image by
        <a
          href="https://pixabay.com/users/congerdesign-509903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2337697"
        >congerdesign</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2337697"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients class="diy-centered">
          <water>25 litres</water>
          <light-ash>0.5 kg</light-ash>
          <nitrosol>0.5 kg</nitrosol>
          <stpp>0.5 kg</stpp>
          <sls>0.5 kg</sls>
          <texapon>0.5 kg</texapon>
          <sulphonic-acid>1.5 litres</sulphonic-acid>
          <color/>
          <fragrance/>
          <formalin/>
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
          <procedure>Pour 10 litres of the 25 litres of water in a 30 litre bucket / bowl.</procedure>
          <procedure>Soak Light / Soda ash in water, add to water above, and stir.</procedure>
          <procedure>Dissolve STPP in water, add to mixture above and stir very well.</procedure>
          <procedure>Dissolve SLS in water, add to mixture and stir very well.</procedure>
          <procedure>Dissolve Texapon in warm water, add to mixture, and stir very well.</procedure>
          <procedure>Pour Sulphonic acid into mixture and stir very well.</procedure>
          <procedure>Dissolve Nitrosol in water, add it to the mixture and stir.</procedure>
          <procedure>Continously add the remaining 15 litres of water and stir vigorously until desired thickness is achieved.</procedure>
          <procedure>Add fragrance and keep stirring.</procedure>
          <procedure>Add color and stir thoroughly.</procedure>
          <procedure>Add formalin and stir very well.</procedure>
          <procedure>Voila! Your soap is ready.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "LiquidSoap"
};
</script>
