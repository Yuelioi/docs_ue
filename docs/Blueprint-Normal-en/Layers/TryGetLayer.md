# TryGetLayer

Attempts to get the ULayer Object of the provided layer name.

Target is Layers Subsystem

## 图示

![]($-20221218-19381389.png)

## Inputs

In: Exec.

Target: Layers Subsystem Object Reference.

Layer Name: Name (by ref). The name of the layer whose ULayer Object to retrieve.  

## Outputs

Out: Exec.

Out Layer: Layer Object Reference.

Return Value: Boolean. If true a valid ULayer Object was found and set to OutLayer; if false, a valid ULayer object was not found and invalid set to OutLayer.

