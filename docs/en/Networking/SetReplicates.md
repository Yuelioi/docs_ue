# SetReplicates

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

