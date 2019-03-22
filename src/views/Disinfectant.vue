<template>
  <recipe recipe="Disinfectant Making">
    <template v-slot:image>
      <div>
        <img rel="preload" as="image" alt="Disinfectant Image" src="../assets/img/disinfectant.jpg">
      </div>
    </template>
    <template v-slot:credits>
      <div></div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
          <carbolic-acid>1/3 bottle</carbolic-acid>
          <alcohol type="Methanol">4 bottles</alcohol>
          <chloroxylenol>1/2 bottle</chloroxylenol>
          <pine-oil>1/2 milk cup</pine-oil>
          <color/>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution/>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Dissolve pine oil in methanol and shake very well.</procedure>
          <procedure>Add carbolic acid to mixture and shake.</procedure>
          <procedure>Add chloroxylenol and shake.</procedure>
          <procedure>Add color and shake.</procedure>
          <procedure>Yup! You've got yourself a disinfectant.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "Disinfectant"
};
</script>