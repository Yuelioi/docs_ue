# SendSocketMessage

如果套接字当前处于连接状态，则发送一个套接字消息。消息返回将在 OnSocketMessageRecieved 事件中发生。

目标是电影管道执行者基地

## 图示

![](/uploads/projects/ue-bluprint/20221218-20095646.png)

## Inputs

在。执行。

目标。电影管道执行器基础对象参考。

在消息中。字符串。要发送的消息。这将通过套接字发送（如果连接了），在消息上有一个 4 字节（int32）大小的前缀，这样接收端就知道在认为完成之前要接收多少数据。这可以防止不小心将 json 字符串切成两半。

## Outputs

出：执行。

返回值。布尔值。如果消息被成功发送，则为真。

<hr>

Sends a socket message if the socket is currently connected. Messages back will happen in the OnSocketMessageRecieved event.

Target is Movie Pipeline Executor Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-20095646.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.

In Message: String. The message to send. This will be sent over the socket (if connected) with a 4 byte (int32) size prefix on the message so the recieving end knows how much data to recieve before considering it done. This prevents accidentally chopping json strings in half..

## Outputs

Out: Exec.

Return Value: Boolean. True if the message was sent succesfully..
