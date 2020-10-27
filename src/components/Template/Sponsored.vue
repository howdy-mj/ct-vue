<template>
  <section class="sponsored">
    <div class="sponsored__name">
      sponsored
    </div>
    <div class="sponsored__main">
      <img :src="imgUrl" alt="img" class="sponsored__img" />
      <div class="sponsored__content">
        <h3 class="sponsored__content--title">{{ title }}</h3>
        <div class="sponsored__content--contents">{{ contents }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sponsored',
  props: {
    imgUrl: String,
    title: String,
    contents: String,
  },
};
</script>

<style scoped lang="scss">
.sponsored {
  border: 1px solid $borderColor;
  border-radius: 0.5rem;
  padding: 3rem 2rem;

  &__name {
    @include description($color: $lightGray);
    margin-bottom: 1.75rem;
  }
  &__main {
    display: flex;
  }
  &__img {
    width: 31rem;
    height: 18rem;
    object-fit: cover;
    margin-right: 2.95rem;
  }
  &__content {
    &--title {
      @include title($isBold: true);
    }
    &--contents {
      @include content();
    }
  }
}

@include respond(tablet) {
  .sponsored {
    border-radius: 0;
    &__main {
      flex-direction: column;
    }
    &__img {
      width: 100%;
      margin-bottom: 2.35rem;
    }
  }
}
</style>
