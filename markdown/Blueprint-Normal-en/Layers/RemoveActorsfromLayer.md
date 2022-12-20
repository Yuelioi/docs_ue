# RemoveActorsfromLayer

Removes the actors from the specified layer.

Target is Layers Subsystem

## 图示

![]($-20221218-19375995.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to remove from the provided layer.

Layer Name: Name (by ref).

Update Stats: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was removed from the layer. false is returned if all the actors already belonged to the layer..

