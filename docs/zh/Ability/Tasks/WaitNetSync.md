# WaitNetSync

在客户端和服务器之间同步执行流程。根据SyncType，客户端和服务器将等待对方到达这个节点或另一个WaitNetSync节点的能力，然后继续执行。

BothWait - 客户端和服务器都将等待，直到对方到达该节点。(谁先得到他们的，在继续执行之前等待对方)。OnlyServerWait - 只有服务器会等待客户端的信号。客户端将发出信号并立即继续，而不等待服务器的消息。OnlyClientWait - 只有客户端会等待服务器的信号。服务器将发出信号并立即继续，而不需要等待来自客户端的消息。

注意，这是 "能力实例范围"。这些同步点不会影响其他能力的同步点。

在大多数情况下，你会把客户端和服务器的执行路径连接到同一个WaitNetSync节点。然而，也可以使用单独的节点，以保证图形的清洁。信号 "是 "能力实例范围"。

目标是能力任务网络同步点

## 图示

![]($-20221218-17335735.png)

## Inputs

在。执行。

同步类型。EAbilityTaskNetSyncType枚举。 

## Outputs

输出。Exec.

异步任务。Ability Task Network Sync Point Object Reference.

On Sync: Exec. On Sync.
