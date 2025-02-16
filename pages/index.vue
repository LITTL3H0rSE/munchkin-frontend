<script setup lang="ts">
import axios from 'axios';

const { connect, sendMessage, createRoom, enterRoom, messages, socket, disconnect } = useSocketStore();

const router = useRouter();
const newMessage = ref<string>();
const name = ref<string>();
const codeInput = ref<string>();

const code = ref<string>();
async function createCode() {
  code.value = await createRoom();
}

async function enter() {
  if (!codeInput.value || !name.value) return;
  const res = await enterRoom(codeInput.value, name.value);
  // router.push(`/${codeInput.value}`);
  router.push({
    path: `/${codeInput.value}`,
    query: {
      name: name.value,
    }
  });
}
</script>

<template>
  <div class="index">
    <div>
      <button @click="createCode()">Create Code</button>
      <p class="typography__text">
        {{ code }}
      </p>
    </div>
    <div>
      <input v-model="name" placeholder="Type your name" />
    </div>
    <div>
      <input v-model="codeInput" placeholder="Type your code" />
      <button @click="enter()" v-if="codeInput && name"> Enter room </button>
    </div>
    <div>
      <button @click="router.push('/deck')"> Deck View </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2, p, li {
  color: var(--text-light-color)
}

.index {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>