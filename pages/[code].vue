<script setup lang="ts">
import axios from 'axios';

const { connect, sendMessage, createRoom, enterRoom, messages, socket, players } = useSocketStore();
const route = useRoute();
const code = route.path.split('/')[1];
const localPlayers = ref<string[]>([]);

watch(() => players, () => {
    localPlayers.value = players.filter(player => player.code == code).map((e) => e['name']);
  },
  { immediate: true, deep: true }
)
</script>

<template>
    <div>
        {{ route.path.split('/')[1] }}
    </div>
    <div>
        {{ localPlayers }}
    </div>
</template>

<style scoped>

</style>