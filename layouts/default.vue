<script setup lang="ts"></script>

<template>
  <div class="page">
    <Navbar :links="[{ text: 'Index', path: '/' },]" />
    <div class="page__wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
.page {
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background-color: var(--background-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .wrapper {
    margin: 0 100px;
  }
}
</style>
