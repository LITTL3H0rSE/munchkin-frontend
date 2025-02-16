<script setup lang="ts">
import axios from 'axios';

const { connect, sendMessage, createRoom, enterRoom, messages, socket, players } = useSocketStore();
const router = useRouter();

</script>

<template>
    <div class="deck-view"></div>
</template>

<style scoped lang="scss">

</style>