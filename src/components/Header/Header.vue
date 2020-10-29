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
  background-color: #ffffff;

  .kmj {
    @include content();
    width: $maxWidth;
    margin: 0 auto;
    padding: 0 3rem;
  }
}

@include respond(tablet) {
  .header {
    margin-bottom: 0.5rem;
    padding: 0 1.5rem;
    height: 4.5rem;
    .kmj {
      padding: 0;
    }
  }
}
</style>
