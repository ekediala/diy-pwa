<template>
  <recipe recipe="Car Wash Liquid Making">
    <template v-slot:image>
      <div>
        <img rel="preload" as="image" src="../assets/img/car-wash.jpg" alt="Car wash recipe image">
      </div>
    </template>
    <template v-slot:credits>
      <div></div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
          <water>6 litres</water>
          <nitrosol>100 g</nitrosol>
          <sls>0.5 kg</sls>
          <sulphonic-acid>75cl</sulphonic-acid>
          <light-ash>0.5 kg</light-ash>
          <texapon>0.5 kg</texapon>
          <formalin/>
          <color/>
          <fragrance/>
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
          <procedure>Collect required water.</procedure>
          <procedure>Soak light ash and caustic soda in 1 litre of water and stir thoroughly.</procedure>
          <procedure>Mix sulphonic acid and texapon separately and stir thoroughly.</procedure>
          <procedure>Pour the light ash mixture into the sulphonic acid mixture and stir thoroughly.</procedure>
          <procedure>Soak nitrosol and sls in water and stir.</procedure>
          <procedure>Mix both mxitures and stir thoroughly.</procedure>
          <procedure>Add color and stir thoroughly.</procedure>
          <procedure>Add fragrance and stir thoroughly.</procedure>
          <procedure>Add formalin and stir thoroughly.</procedure>
          <procedure>Yay! Go make some money.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "CarWash"
};
</script>
