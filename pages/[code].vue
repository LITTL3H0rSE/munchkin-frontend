<script setup lang="ts">
import axios from 'axios';

const { connect, sendMessage, createRoom, enterRoom, messages, socket, players, disconnect } = useSocketStore();
const route = useRoute();
const router = useRouter();
const code = route.path.split('/')[1];
const name = route.query.name as string;
const localPlayers = ref<string[]>([]);

onMounted(() => connect(code, name));

watch(() => players, () => {
    localPlayers.value = players.filter(player => player.code == code).map((e) => e['name']);
  },
  { immediate: true, deep: true }
)

function disconnectFromRoom() {
    disconnect();
    router.push('/');
}
</script>

<template>
    <div class="code">
        <div>
        <p class="p-m">
            {{ route.path.split('/')[1] }}
        </p>
    </div>
    <div>
        <h5 class="h-5">
            Local Players:
        </h5>
        <template v-for="p in localPlayers">
            <p class="p-m">
                {{ p }}
            </p>
        </template>
    </div>
    <div>
        <!-- <button @click="disconnect()"> Disconnect </button> -->
    </div>
    </div>
</template>

<style scoped lang="scss">
h5, p, li {
  color: var(--text-light-color)
}

.code {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>