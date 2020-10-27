<template>
  <section id="feedContainer">
    <div class="feedContainer--category">
      <div class="feedContainer--name">
        {categoryName}
      </div>
      <div class="feedContainer--id">{contentId}</div>
    </div>
    <div class="feedContainer--create">
      <div class="feedContainer--userId">{userId}</div>
      <div class="feedContainer--created-date">{date}</div>
    </div>
    <div class="feedContainer--detail">
      <div class="feedContainer--title">{title}</div>
      <div class="feedContainer--content">{content}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedContainer',
  props: {
    categoryName: String,
    contentId: Number,
    userId: String,
    date: String,
    title: String,
    content: String,
  },
};
</script>

<style scoped lang="scss">
.feedContainer {
  &--category {
    display: flex;
  }
}
</style>
