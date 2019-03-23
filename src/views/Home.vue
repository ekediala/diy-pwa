<template>
  <div class="text-xs-center">
    <v-carousel height="300">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-card>
      <v-card-title primary-title>
        <h2 style="margin: auto" class="headline">DO IT YOURSELF!</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>
          A good home is a healthy home. A healthy home undergoes proper house-keeping.
          House-keeping is not for the faint of hearts.
          It requires the dedicated labour and the right materials.
          The right materials don’t always come cheap, but are important.
          Cleaning agents such as soap and bleach should always be available in a healthy home—we don’t run out of things to wash.
          Disinfectants and insecticides help keep the germs and pests away.
          Air fresheners and perfumes ensure no offensive smells linger.
        </p>

        <p>
          However, keeping up with an abundant monthly supply of these materials could overwhelm a person on a lean budget.
          That’s where DIY comes in. In clear and simple steps, the process of making the house-keeping materials have been detailed.
          Not only are they cheaper to make, you also get to choose the concentration yourself.
          Everything made to your taste. Navigate through our page and see how they are done.
        </p>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <div id="diy-alert" class="text-xs-center">
      <v-alert type="info" :value="true">
        <h2>Disclaimer</h2>
        <v-divider></v-divider>
        <p>
          By proceeding with the procedures below, you agree you are responsible for your safety,
          and also, that any loss / liability incurred is completely your responsibility. We do
          not offer any guarantees on the correctness of the procedures.
        </p>
      </v-alert>
      <v-divider></v-divider>
      <v-alert type="warning" :value="true">
        <h2>Safety</h2>
        <v-divider></v-divider>
        <p>
          <b>
            <em>*Ensure to wear protective equipments.</em>
          </b>
        </p>
        <p>You are dealing with chemicals; wear rubber gloves, nose guards, and lab coats. Ensure your workspace is safe for you and your environment.</p>
      </v-alert>

      <v-divider></v-divider>
      <v-alert type="success" :value="true">
        <h2>Measurement Units.</h2>
        <v-divider></v-divider>
        <p>Units of measurement are units used in measuring said materials in Eastern Nigerian markets.</p>
        <p>
          More often than not, the units won't be necessary.
          Just tell the vendor what you want to make and the quantity you want to produce.
          Eg., if you want to produce 30 litres of liquid soap, just say "I want materials for making 30 litres of liquid soap."
        </p>
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: require("../assets/img/liquid-soap-154014.svg")
        },
        {
          src: require("../assets/img/air-freshener.jpg")
        },
        {
          src: require("../assets/img/bleach-147520_1280.png")
        },
        {
          src: require("../assets/img/car-wash.jpg")
        },
        {
          src: require("../assets/img/disinfectant.jpg")
        }
      ]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
