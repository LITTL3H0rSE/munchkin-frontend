import axios from 'axios';

export const useSocketStore = defineStore('socket', () => {
    const socket = ref<WebSocket>();
    const messages = ref<string[]>([]);
    const players = ref<{ name: string; code: string }[]>([]);

    function connect() {
        socket.value = new WebSocket("ws://100.124.112.80:8000/ws");
        socket.value.onopen = () => socket.value?.send("Hello from Vue! at " + new Date());
        socket.value.onmessage = (event: MessageEvent) => {
            switch (event.data.type) {
                case 'player_joined': 
                    players.value.push({ name: event.data.player, code: event.data.code });
                    break;
                default: 
                    messages.value.push(event.data);
            }
            console.log(event);
        }
        socket.value.onclose = () => console.log('WebSocket connection closed.');
        socket.value.onerror = (error: Event) => console.error("WebSocket error: ", error);
    }

    function sendMessage(msg?: string) {
        if (!msg || !socket.value)
            return
        socket.value.send(msg);
    }

    function disconnect() {
        socket.value?.close();
        socket.value = undefined;
    }

    async function createRoom() {
        const res = await axios.post('http://100.124.112.80:8000/create-room');
        return res.data.room_code;
    }
    
    async function enterRoom(room_code: string, player_name: string) {
        const res = await axios.post('http://100.124.112.80:8000/join-room', {
            room_code,
            player_name,
          })
    }

    return { connect, sendMessage, disconnect, createRoom, enterRoom, messages, socket, players }
})