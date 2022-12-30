# RemoveActorsfromDataLayers

Remove the actors to the DataLayers

Target is Data Layer Editor Subsystem

## 图示

![]($-20221218-18351080.png)

## Inputs

In: Exec.

Target: Data Layer Editor Subsystem Object Reference.

Actors: Array of Actor Object References. The actors to remove to the DataLayers.

Data Layers: Array of Data Layer Object References. A valid list of DataLayers..  

## Outputs

Out: Exec.

Return Value: Boolean. true if at least one actor was removed from at least one DataLayer. false is returned if none of the actors belonged to any of the specified DataLayers..

