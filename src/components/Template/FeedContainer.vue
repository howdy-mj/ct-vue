<template>
  <section>
    <div class="feedContainer" v-for="feed in feedData" :key="feed.id">
      <div class="feedContainer__category">
        <div class="feedContainer__category--name">
          {{ feed.category_id }}
        </div>
        <div class="feedContainer__category--id">{{ feed.id }}</div>
      </div>
      <div class="feedContainer--line" />
      <div class="feedContainer__create">
        <div class="feedContainer__create--userId">{{ feed.user_id }}</div>
        <div class="feedContainer__create--date">{{ feed.created_at.slice(0, 10) }}</div>
      </div>
      <div class="feedContainer__detail">
        <div class="feedContainer__detail--title">
          {{ feed.title.length > 100 ? feed.title.slice(0, 100) + '...' : feed.title }}
        </div>
        <div class="feedContainer__detail--content">
          {{ feed.contents.length > 70 ? feed.contents.slice(0, 70) + '...' : feed.contents }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedContainer',
  props: {
    feedData: Array,
  },
};
</script>

<style scoped lang="scss">
.feedContainer {
  border: 1px solid $borderColor;
  border-radius: 0.5rem;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: #ffffff;

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
