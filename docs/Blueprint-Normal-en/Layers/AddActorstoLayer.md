# AddActorstoLayer

Add the actors to the named layer

Target is Layers Subsystem

## 图示

![]($-20221218-19372685.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to add to the named layer.

Layer Name: Name (by ref). The name of the layer to add to.  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was added to the layer. false is returned if all the actors already belonged to the layer..

