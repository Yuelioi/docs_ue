# GetLODMaterialSlot

Gets the material slot used for a specific LOD section.

Target is Skeletal Mesh Editor Subsystem

## 图示

![]($-20221218-20582699.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Editor Subsystem Object Reference.

Skeletal Mesh: Skeletal Mesh Object Reference. SkeletalMesh to get the material index from..

LODIndex: Integer. Index of the StaticMesh LOD..

Section Index: Integer. Index of the StaticMesh Section..  

## Outputs

Out: Exec.

Return Value: Integer. MaterialSlotIndex Index of the material slot used by the section or INDEX_NONE in case of error..

