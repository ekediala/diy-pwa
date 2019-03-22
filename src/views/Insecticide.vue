<template>
  <recipe recipe="Insecticide Making">
    <template v-slot:image>
      <div>
        <img src="../assets/img/insecticide.png" alt>
      </div>
    </template>
    <template v-slot:credits>
      <div>
        Image by
        <a
          href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=24302"
        >Clker-Free-Vector-Images</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=24302"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
          <datsh>1 litre</datsh>
          <rambo>1 litre</rambo>
          <industrial-camphor>2 spoons</industrial-camphor>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution>Do not stay in the room after spraying your insecticide.</precaution>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Dissolve industrial camphor in rambo.</procedure>
          <procedure>Add datsh and shake it vigorously.</procedure>
          <procedure>Insecticide is ready.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "Insecticide"
};
</script>