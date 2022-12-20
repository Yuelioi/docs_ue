# MakeReparentSubobjectParams

Adds a node that create a 'ReparentSubobjectParams' from its members

## 图示

![]($-20221218-15000157.png)

## Inputs

New Parent Handle: Subobject Data Handle Structure. New Parent Handle:. The handle of the subobject to reparent to..

Blueprint Context: Blueprint Object Reference. Blueprint Context:. Pointer to the blueprint context that this subobject is in. If this is null, it is assumed that. this subobject is being added to an instance..

Actor Preview Context: Actor Object Reference. Actor Preview Context:. The preview actor context to be used if in a blueprint context.. This must have a value if BlueprintContext is needed..  

## Outputs

Reparent Subobject Params: Reparent Subobject Params Structure.

