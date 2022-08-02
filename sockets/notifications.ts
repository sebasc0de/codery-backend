import { Socket } from "socket.io";

export const notificationSocket = (socket: Socket) => {
  socket.emit("notifications", { title: "New message", msg: "Hola pedro" });
};
