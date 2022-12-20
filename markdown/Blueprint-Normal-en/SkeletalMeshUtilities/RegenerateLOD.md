# RegenerateLOD

Regenerate LODs of the mesh

Target is Skeletal Mesh Editor Subsystem

## 图示

![]($-20221218-20583034.png)

## Inputs

In: Exec.

Skeletal Mesh: Skeletal Mesh Object Reference. The mesh that will regenerate LOD.

New LODCount: Integer. Set valid value (>0) if you want to change LOD count. Otherwise, it will use the current LOD and regenerate.

Regenerate Even if Imported: Boolean. If this is true, it only regenerate even if this LOD was imported before If false, it will regenerate for only previously auto generated ones.

Generate Base LOD: Boolean. If this is true and there is some reduction data, the base LOD will be reduce according to the settings.  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeed. If mesh reduction is not available this will return false..

