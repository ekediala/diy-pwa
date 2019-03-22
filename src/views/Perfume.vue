<template>
  <recipe recipe="Perfume Making">
    <template v-slot:image>
      <div>
        <img rel="preload" as="image" src="../assets/img/perfume.png" alt="Perfume Image">
      </div>
    </template>
    <template v-slot:credits>
      <div>
        Image by
        <a
          href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146540"
        >OpenClipart-Vectors</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=146540"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients class="diy-centered">
          <alcohol>20 ml</alcohol>
          <glycerine>5 ml</glycerine>
          <color/>
          <fragrance types="5"/>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution>
          <ul>
            <li>
              <p>As you go higher in the homologous series of alcohol, the volatility (it's tendency to evaporate) increases.</p>
            </li>
            <li>
              <p>The volatility of your product depends on the alcohol you choose.</p>
            </li>
            <li>
              <p>Adding colors to perfumes is not advised. It stains your clothing.</p>
            </li>
            <li>
              <p>Too much glycerine could lead to very oily perfumes.</p>
            </li>
            <li>
              <p>
                Volume of alcohol to fragrance can be varied depending on your preference.
                You could do 1:1 (20 ml of fragrance to 20 ml of alcohol ) or 1:2 (20 ml of fragrance to 40 ml of alcohol).
              </p>
            </li>
          </ul>
        </precaution>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Add alcohol to glycerine and shake well.</procedure>
          <procedure>Add your fragrance to the alcohol mixture and stir vigorously.</procedure>
          <procedure>Leave for a day to fully mix.</procedure>
          <procedure>Voila! You do smell nice now!</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "Perfume"
};
</script>