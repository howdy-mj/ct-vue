<template>
  <div class="feed" :class="[open && 'open']">
    <div class="feed__login">
      <Button text="로그인" big bold />
    </div>
    <div class="feed__main">
      <div class="feed__filter">
        <div class="feed__filter--order">
          <div class="feed__filter--options">오름차순</div>
          <div class="feed__filter--options">내림차순</div>
        </div>
        <button class="feed__filter--button" @click="showModal">필터</button>
      </div>
      <FeedContainer :feedData="feedData" />
      <Sponsored
        imgUrl="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0,0,450,450"
        title="sponsored title"
        contents="sponsored contents"
      />
    </div>
    <Modal ref="modal" :class="[open && 'open']" />
  </div>
</template>

<script>
import { Modal } from '../../components';
import { FeedContainer, Sponsored, Button } from '../../components/Template';
import axios from 'axios';

export default {
  components: {
    FeedContainer,
    Sponsored,
    Button,
    Modal,
  },
  data() {
    return {
      feedData: [],
      adsData: [],
    };
  },
  created: function() {
    this.getFeed();
    // this.getAds();
  },
  mounted: function() {
    // this.getFeed();
  },
  methods: {
    getFeed() {
      const headers = { 'Content-Type': 'application/json' };
      axios('https://problem.comento.kr/api/list?page=1&ord=asc&category[]=1&limit=10', {
        headers,
      }).then(res => (this.feedData = res.data.data));
    },
    getAds() {
      axios('https://problem.comento.kr/api/ads?page=1&limit=1').then(res => console.log(res));
    },
    showModal() {
      let element = this.$refs.modal.$el;
      element.modal('show');
    },
  },
};
</script>

<style scoped lang="scss">
.feed {
  position: relative;
  max-width: $maxWidth;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  height: 95vh;

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
    background-color: #ffffff;

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
      background-color: #ffffff;
    }
  }
}

@include respond(tablet) {
  .feed {
    padding: 0;
    background-color: $borderColor;
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
