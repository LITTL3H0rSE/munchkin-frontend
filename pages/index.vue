<script setup lang="ts">
import axios from 'axios';

const { connect, sendMessage, createRoom, enterRoom, messages, socket } = useSocketStore();

onMounted(() => connect());

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
  router.push(`/${codeInput.value}`);
}
</script>

<template>
    <div>
      <h2>WebSocket Messages</h2>
      <ul>
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
      <input v-model="newMessage" placeholder="Type a message" />
      <button @click="sendMessage(newMessage)">Send</button>
      <!-- <button @click="router.push(`/${code}`)" v-if="code">Go to room</button> -->
    </div>
    <div>
      <button @click="createCode()">Create Code</button>
      {{ code }}
    </div>
    <div>
      <input v-model="name" placeholder="Type your name" />
    </div>
    <div>
      <input v-model="codeInput" placeholder="Type your code" />
      <button @click="enter()" v-if="codeInput && name"> Enter room </button>
    </div>
  </template>

<style lang="scss">

</style>