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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed architecto repudiandae, aperiam amet quod, error optio ipsam unde praesentium magni explicabo sequi ducimus veritatis totam, aliquid nihil soluta tenetur similique.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus ipsum, architecto ipsa pariatur dolor, enim totam alias harum praesentium nesciunt culpa iusto aut expedita fugiat dolorum provident a nulla.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quibusdam esse repellendus, voluptate mollitia velit magnam excepturi reprehenderit molestias ipsam omnis, at quae sint quo nesciunt delectus ullam, maxime similique.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, esse saepe molestiae, sunt exercitationem, officiis illum fuga natus possimus enim numquam tempora aliquam. Officiis ipsa libero soluta minus molestias doloribus.</p>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <div id="diy-alert" class="text-xs-center">
      <v-alert type="info" :value="true">
        <h2>Disclaimer</h2>
        <v-divider></v-divider>
        <p>
          By proceeding with the procedures below, you agree you are responsible for your safety,
          and also that any loss / liability incurred is completely your responsibility. We do
          not offer any guarantees on the correctness of the procedures.
        </p>
      </v-alert>
      <v-divider></v-divider>
      <v-alert type="warning" :value="true">
        <h2>Safety</h2>
        <p>
          <b>
            <em>*Ensure to wear protective equipments.</em>
          </b>
        </p>
        <p>You are dealing with chemicals; wear rubber gloves, nose guards, and lab coats. Ensure your workspace is safe for you and your environment.</p>
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
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
