<template>
  <div class="feed">
    <div class="feed__login">
      <Button text="로그인" big />
    </div>
    <div class="feed__main">
      <div class="feed__filter">
        <div class="feed__filter--order">
          <div class="feed__filter--options">오름차순</div>
          <div class="feed__filter--options">내림차순</div>
        </div>
        <button class="feed__filter--button">필터</button>
      </div>
      <FeedContainer
        categoryName="apple"
        contentId="123"
        userId="userId"
        date="2020-10-00"
        title="title ddddd"
        content="contentsdksjfldkajf;lskdjf"
      />
      <Sponsored
        imgUrl="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0,0,450,450"
        title="sponsored title"
        contents="sponsored contents"
      />
    </div>
  </div>
</template>

<script>
import { FeedContainer, Sponsored, Button } from '../../components/Template';

export default {
  components: {
    FeedContainer,
    Sponsored,
    Button,
  },
};
</script>

<style scoped lang="scss">
.feed {
  max-width: $maxWidth;
  margin: 0 auto;
  display: flex;

  &__login {
    width: 23.5rem;
    margin-right: 4rem;
  }
  &__main {
    width: 100%;
  }
  &__filter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.4rem;

    &--order {
      display: flex;
      align-self: center;
    }
    &--options {
      &::before {
        content: '0';
        color: $primaryColor;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 5px;
      }
      &:first-child {
        margin-right: 1rem;
      }
    }

    &--button {
      @include description($color: $lightGray);
      border: 1px solid $borderColor;
      width: 4.8rem;
      border-radius: 3px;
    }
  }
}

@include respond(tablet) {
  .feed {
    &__login {
      display: none;
    }

    &__filter {
      padding: 0.8rem 1.5rem;
      margin-bottom: 0;
    }
  }
}
</style>
