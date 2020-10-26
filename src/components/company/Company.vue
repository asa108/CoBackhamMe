<template>
  <div class="company">
    <Slide>
      <div class="section">
        <p class="name">{{ company.name }}</p>
      </div>
      <div class="section">
        <p class="label">Outline</p>
        <p class="value">{{ company.outline }}</p>
      </div>
      <div class="section">
        <p class="label">Access</p>
        <p class="value">
          <a :href="company.map" targe="_blank">{{ company.address }}</a>
        </p>
      </div>
      <div class="section">
        <p class="label">Contact</p>
        <p class="value">{{ company.mail }}</p>
        <!-- <p class="value">{{ company.tel }}</p> -->
      </div>
      <div class="section">
        <p class="label">Established</p>
        <p class="value">{{ company.established }}</p>
      </div>
    </Slide>
  </div>
</template>
<script>
import Slide from "../transform/Slide.vue";
export default {
  components: {
    Slide,
  },
  props: {
    company: Object,
  },
};
</script>
<style lang="scss" scoped>
.company {
  display: flex;
  padding: 32px 0;
}
.name {
  text-align: left;
  font-size: 24px;
  font-weight: 600;
}
.label {
  color: #aaa;
  font-size: 14px;
  text-align: left;
}
.value {
  text-align: left;
  font-size: 18px;
  margin: 0;
  a {
    text-decoration: none;
    /* color: black; */
  }
}
</style>