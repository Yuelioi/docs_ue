# AddNode

Add a node in the container, the node will be add into a TMap.

Target is Interchange Base Node Container

## 图示

![]($-20221218-19354667.png)

## Inputs

In: Exec.

Target: Interchange Base Node Container Object Reference.

Node: Interchange Base Node Object Reference. a pointer on the node you want to add.  

## Outputs

Out: Exec.

Return Value: String. : return the node unique ID of the added item. If the node already exist it will return the existing ID. Return InvalidNodeUid if the node cannot be added..

