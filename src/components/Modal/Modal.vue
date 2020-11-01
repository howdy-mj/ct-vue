<template>
  <div class="modal">
    <div class="modal__close">x</div>
    <h2 class="modal__title">필터</h2>
    <div class="modal__category">1</div>
    <div class="modal__category">2</div>
    <div class="modal__category">3</div>
    <div class="modal__save">
      <Button text="저장하기" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Button } from '../Template';

export default {
  components: {
    Button,
  },
  data() {
    return {
      categories: [],
    };
  },
  created: function() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      const headers = { 'Content-Type': 'application/json' };
      axios('https://problem.comento.kr/api/category', {
        headers,
      }).then(res => (this.categories = res));
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  /* display: none; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #ffffff;
  width: 45rem;
  height: 23.8rem;
  border: 1px solid $borderColor;
  padding: 3rem 3rem;

  &__close {
    font-size: 1.2rem;
    color: $lightGray;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__title {
    @include modalTitle();
    margin-bottom: 1.3rem;
  }
}

/* .open {
  display: show;
} */

@include respond(tablet) {
  .modal {
  }
}
</style>
