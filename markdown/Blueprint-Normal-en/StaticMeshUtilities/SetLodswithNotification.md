# SetLodswithNotification

Remove then add LODs on a static mesh.. The static mesh must have at least LOD 0.. The LOD 0 of the static mesh is kept after removal.. The build settings of LOD 0 will be applied to all subsequent LODs.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21041231.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Mesh to process..

Reduction Options: Static Mesh Reduction Options Structure (by ref). Options on how to generate LODs on the mesh..

Apply Changes: Boolean. Indicates if change must be notified..  

## Outputs

Out: Exec.

Return Value: Integer. the number of LODs generated on the input mesh. An negative value indicates that the reduction could not be performed. See log for explanation. No action will be performed if ReductionOptions.ReductionSettings is empty.

