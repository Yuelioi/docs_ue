# SetLodfromStaticMesh

Adds or create a LOD at DestinationLodIndex using the geometry from SourceStaticMesh SourceLodIndex

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21040875.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Destination Static Mesh: Static Mesh Object Reference. The static mesh to set the LOD in..

Destination Lod Index: Integer. The index of the LOD to set..

Source Static Mesh: Static Mesh Object Reference. The static mesh to get the LOD from..

Source Lod Index: Integer. The index of the LOD to get..

Reuse Existing Material Slots: Boolean. If true, sections from SourceStaticMesh will be remapped to match the material slots of DestinationStaticMesh when they have the same material assigned. If false, all material slots of SourceStaticMesh will be appended in DestinationStaticMesh..  

## Outputs

Out: Exec.

Return Value: Integer. The index of the LOD that was set. It can be different than DestinationLodIndex if it wasn't a valid index. A negative value indicates that the LOD was not set. See log for explanation..

