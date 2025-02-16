<script setup lang="ts">
import type { NavbarLink } from "@/types/index";
const props = defineProps<{
  links?: NavbarLink[];
}>();

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="navbar">
    <div class="navbar__logo">
      <div
        class="logo"
        :style="{ '--image': `url('/images/logo.jpg')` }"
        @click="router.push('/')"
      />
    </div>
    <div class="navbar__links">
      <template v-for="l in links">
        <a
          :href="l.path ?? '/'"
          :clicked="
            l.path != '/'
              ? l.path && route.path.includes(l.path)
                ? true
                : false
              : l.path == route.path
          "
        >
          <h6 class="typography__title__6">
            {{ l.text }}
          </h6>
        </a>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 100px;
  gap: 50px;
  &__links {
    width: 100%;
    display: flex;
    gap: 40px;
    margin-right: 90px;
    justify-content: center;
    > a {
      cursor: pointer;
      &[clicked="true"] {
        > h6 {
          color: var(--primary-color);
        }
      }
      > h6 {
        color: var(--text-light-color);
      }
    }
  }
  &__logo {
    flex-shrink: 0;
    .logo {
      background: var(--image);
      background-size: cover;
      background-position: center;
      border-radius: 20px;
      height: 40px;
      width: 40px;
      cursor: pointer;
    }
  }
}
</style>
