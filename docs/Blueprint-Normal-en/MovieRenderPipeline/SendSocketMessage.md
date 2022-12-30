# SendSocketMessage

Sends a socket message if the socket is currently connected. Messages back will happen in the OnSocketMessageRecieved event.

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20095646.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.

In Message: String. The message to send. This will be sent over the socket (if connected) with a 4 byte (int32) size prefix on the message so the recieving end knows how much data to recieve before considering it done. This prevents accidentally chopping json strings in half..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the message was sent succesfully..

