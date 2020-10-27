<template>
  <button class="button" :class="[big && 'big']">
    <div class="button__text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    big: Boolean,
  },
};
</script>

<style scoped lang="scss">
.button {
  background-color: $primaryColor;
  border-radius: 5px;
  width: 100%;
  height: 4rem;
  &__text {
    color: #ffffff;
    font-size: 2.2rem;
    font-weight: bold;
  }
  &.big {
    height: 6rem;
  }
}
</style>
