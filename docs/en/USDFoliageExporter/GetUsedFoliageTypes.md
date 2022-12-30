# GetUsedFoliageTypes

Returns all the different types of UFoliageType assets that a particular AInstancedFoliageActor uses.. This function exists because we want to retrieve all instances of all foliage types on an actor, but we. can't return nested containers from UFUNCTIONs, so users of this API should call this, and then GetInstanceTransforms.

Target is Usd Exporter Blueprint Library

## 图示

![]($-20221218-21212139.png)

## Inputs

In: Exec.

Actor: Instanced Foliage Actor Object Reference.  

## Outputs

Out: Exec.

Return Value: Array of Foliage Type Object References. Returns all the different types of UFoliageType assets that a particular AInstancedFoliageActor uses.. This function exists because we want to retrieve all instances of all foliage types on an actor, but we. can't return nested containers from UFUNCTIONs, so users of this API should call this, and then GetInstanceTransforms..

