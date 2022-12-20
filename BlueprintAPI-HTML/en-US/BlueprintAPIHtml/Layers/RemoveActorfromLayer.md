# RemoveActorfromLayer

Removes an actor from the specified layer.

Target is Layers Subsystem

## 图示

![]($-20221218-19375765.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Actor: Actor Object Reference. The actor to remove from the provided layer.

Layer to Remove: Name (by ref). The name of the layer to remove the actor from.

Update Stats: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the actor was removed from the layer. false is returned if the actor already belonged to the layer..

