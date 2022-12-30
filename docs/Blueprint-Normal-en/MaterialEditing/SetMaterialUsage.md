# SetMaterialUsage

Enable a particular usage for the supplied material (e.g. SkeletalMesh, ParticleSprite etc)

Target is Material Editing Library

## 图示

![]($-20221218-19465838.png)

## Inputs

In: Exec.

Material: Material Object Reference. Material to change usage for.

Usage: EMaterialUsage Enum. New usage type to enable for this material.  

## Outputs

Out: Exec.

Needs Recompile: Boolean. Returned to indicate if material needs recompiling after this change.

Return Value: Boolean.

