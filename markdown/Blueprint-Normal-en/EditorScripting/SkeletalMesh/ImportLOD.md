# ImportLOD

Import or re-import a LOD into the specified base mesh. If the LOD do not exist it will import it and add it to the base static mesh. If the LOD already exist it will re-import the specified LOD.

Target is Skeletal Mesh Editor Subsystem

## 图示

![]($-20221218-18535967.png)

## Inputs

In: Exec.

Base Mesh: Skeletal Mesh Object Reference.

LODIndex: Integer.

Source Filename: String.  

## Outputs

Out: Exec.

Return Value: Integer. The index of the LOD that was imported or re-imported. Will return INDEX_NONE if anything goes bad..

