# SocketMessageRecievedDelegate

Socket Message Recieved Delegate:. If this executor has been configured to connect to a socket, this event will be called each time the socket recieves something.. The message response expected from the server should have a 4 byte (int32) size prefix for the string to specify how much data. we should expect. This delegate will not get invoked until we recieve that many bytes from the socket connection to avoid broadcasting. partial messages.

<hr>

Socket Message Recieved Delegate:. If this executor has been configured to connect to a socket, this event will be called each time the socket recieves something.. The message response expected from the server should have a 4 byte (int32) size prefix for the string to specify how much data. we should expect. This delegate will not get invoked until we recieve that many bytes from the socket connection to avoid broadcasting. partial messages.
