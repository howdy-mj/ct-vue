<template>
  <section class="feedContainer">
    <div class="feedContainer__category">
      <div class="feedContainer__category--name">
        {{ categoryName }}
      </div>
      <div class="feedContainer__category--id">{{ contentId }}</div>
    </div>
    <div class="feedContainer--line" />
    <div class="feedContainer__create">
      <div class="feedContainer__create--userId">{{ userId }}</div>
      <div class="feedContainer__create--date">{{ date }}</div>
    </div>
    <div class="feedContainer__detail">
      <div class="feedContainer__detail--title">{{ title }}</div>
      <div class="feedContainer__detail--content">{{ content }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedContainer',
  props: {
    categoryName: String,
    contentId: String,
    userId: String,
    date: String,
    title: String,
    content: String,
  },
};
</script>

<style scoped lang="scss">
.feedContainer {
  border: 1px solid $borderColor;
  border-radius: 0.5rem;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  &__category {
    display: flex;
    justify-content: space-between;

    &--name {
      @include description();
    }
    &--id {
      @include description($color: $lightGray);
    }
  }
  &--line {
    margin-top: 1.2rem;
    margin-bottom: 2rem;
    border: 1px solid $borderColor;
  }
  &__create {
    display: flex;
    margin-bottom: 2.5rem;
    &--userId {
      @include description($color: $primaryColor);

      &::after {
        content: '|';
        margin: 0 1rem;
        color: $borderColor;
      }
    }
    &--date {
      @include description($color: $darkGray);
    }
  }
  &__detail {
    &--title {
      @include title($isBold: true);
      margin-bottom: 1.5rem;
    }
    &--content {
      @include content();
    }
  }
}

@include respond(tablet) {
  .feedContainer {
    border-radius: 0;
  }
}
</style>
