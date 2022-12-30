# CompactMaterialIDs

Compact the MaterialIDs of the TargetMesh, ie remove any un-used MaterialIDs and remap the remaining. N in-use MaterialIDs to the range [0,N-1]. Optionally compute a Compacted list of Materials.

Target is Geometry Script Library Mesh Material Functions

## 图示

![]($-20221218-19111561.png)

## Inputs

In: Exec.

Target Mesh: Dynamic Mesh Object Reference.

Source Material List: Array of Material Interface Object References. Input Material list, assumption is that SourceMaterialList.Num() == number of MaterialIDs on mesh at input.

Debug: Geometry Script Debug Object Reference.  

## Outputs

Out: Exec.

Compacted Material List: Array of Material Interface Object References. new Compacted Material list, one-to-one with new compacted MaterialIDs.

Target Mesh: Dynamic Mesh Object Reference.

