<template>
  <div class="header">
    <div class="kmj">[2020.10.30] 김민정</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  height: 7rem;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 5rem;
  display: flex;
  align-items: center;

  .kmj {
    @include content();
    width: $maxWidth;
    margin: 0 auto;
  }
}

@include respond(tablet) {
  .header {
    margin-bottom: 0;
    padding: 0 1.5rem;
    height: 4.5rem;
  }
}
</style>
