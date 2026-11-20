import socket from "./file_transfer_socket.js";

let channel = null;
const clientId = crypto.randomUUID();

function joinRoom() {
    const roomName = document.getElementById("roomName").value.trim();

    if (!roomName) {
        document.getElementById("joinStatus").innerText = ("Please enter a room name!");
        return;
    }

    if (channel) {
        channel.leave();
    }

    channel = socket.channel(`transfer:${roomName}`, {});

    channel.join()
        .receive("ok", () => {
            document.getElementById("joinStatus").innerText = (`Connected to room: ${roomName}`);
        })
        .receive("error", error => {
            document.getElementById("joinStatus").innerText = ("Failed to join room:", error);
        });

    channel.on("message", payload => {
        if (payload.sender === clientId) {
            return;
        }
        let messages = document.getElementById("messages")
        let newMessage = `<p>Other User: ${payload.message}</p>`
        messages.innerHTML += newMessage
    });
}

function sendMessage() {
    if (!channel) {
        document.getElementById("joinStatus").innerText = ("You must join a room first!");
        return;
    }

    channel.push("message", {
        message: document.getElementById("roomMessage").value,
        sender: clientId
    });
    let messages = document.getElementById("messages")
    let newMessage = `<p>You: ${document.getElementById("roomMessage").value}</p>`
    messages.innerHTML += newMessage
}

document.getElementById("joinButton").addEventListener("click", joinRoom);
document.getElementById("sendMessage").addEventListener("click", sendMessage);