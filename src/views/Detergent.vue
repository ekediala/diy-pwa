<template>
  <recipe recipe="Washing Powder Detergent Making">
    <template v-slot:image>
      <div>
        <img src="../assets/img/detergent.jpg" alt="Detergent Making Image">
      </div>
    </template>
    <template v-slot:credits>
      <div>
        Image by
        <a
          href="https://pixabay.com/users/habelfrank-2379311/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1500058"
        >Frank Habel</a> from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1500058"
        >Pixabay</a>
      </div>
    </template>

    <template v-slot:ingredients>
      <div>
        <ingredients>
          <hydrogen-peroxide>0.5 kg</hydrogen-peroxide>
          <caustic-soda>2.5 kg</caustic-soda>
          <light-ash>2.5 kg</light-ash>
          <pko>6 milk cups</pko>
          <ammonia>0.2 kg</ammonia>
          <color/>
          <fragrance/>
          <water>2 litres</water>
        </ingredients>
      </div>
    </template>

    <template v-slot:precaution>
      <div>
        <precaution>
          <ul>
            <li>
              <p>The quantity of water needed is not stringent. Use your own discretion. Use as much as is required to dissolve and fully mix your ingredients.</p>
            </li>
            <li>
              <p>Color isn't really necessary.</p>
            </li>
          </ul>
        </precaution>
      </div>
    </template>

    <template v-slot:procedure>
      <div>
        <procedure-list>
          <procedure>Dilute the stated amount of caustic soda in water.</procedure>
          <procedure>Bleach PKO, mix it with color, and add to mixture above.</procedure>
          <procedure>Add light ash.</procedure>
          <procedure>Add hydrogen per oxide.</procedure>
          <procedure>Add fragrance.</procedure>
          <procedure>Stir mixture.</procedure>
          <procedure>Dry mixture under the sun.</procedure>
          <procedure>Grind the resulting solid into powder.</procedure>
          <procedure>That's it! You can do your laundry now, your excuses have been rendered invalid.</procedure>
        </procedure-list>
      </div>
    </template>
  </recipe>
</template>

<script>
export default {
  name: "Detergent"
};
</script>