<template>
  <recipe recipe="Liquid Soap Making">
    <template v-slot:image>
      <div></div>
    </template>
    <template v-slot:credits>
      <div></div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients></ingredients>
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
          <procedure></procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
    name: '',
}
</script>