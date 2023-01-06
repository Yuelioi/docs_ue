# SetReplicates

设置这个角色是否复制到网络客户端。当这个角色在服务器上生成时，它也会被发送到客户端。被标记为复制的属性如果在服务器上发生变化，将在客户端上更新。在内部改变RemoteRole属性，并处理该角色需要被添加到网络角色列表中的情况。

目标是演员

## 图示

![]($-20221218-20114745.png)

## Inputs

在。执行。

目标。演员对象参考。

在Replicates中。布尔值。该行为体是否复制到网络客户端。  

## Outputs

出：执行。

Set whether this actor replicates to network clients. When this actor is spawned on the server it will be sent to clients as well.. Properties flagged for replication will update on clients if they change on the server.. Internally changes the RemoteRole property and handles the cases where the actor needs to be added to the network actor list.

Target is Actor

## 图示

![]($-20221218-20114745.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

In Replicates: Boolean. Whether this Actor replicates to network clients..  

## Outputs

Out: Exec.

