# RemoveActorsfromLayers

Remove the actors to the named layers

Target is Layers Subsystem

## 图示

![]($-20221218-19380110.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to remove to the named layers.

Layer Names: Array of Names. A valid list of layer names..

Update Stats: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was removed from at least one layer. false is returned if none of the actors belonged to any of the specified layers..

