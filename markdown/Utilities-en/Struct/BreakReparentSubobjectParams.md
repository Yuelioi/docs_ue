# BreakReparentSubobjectParams

Adds a node that breaks a 'ReparentSubobjectParams' into its member fields

## 图示

![]($-20221218-14414608.png)

## Inputs

Reparent Subobject Params: Reparent Subobject Params Structure (by ref).  

## Outputs

New Parent Handle: Subobject Data Handle Structure. New Parent Handle:. The handle of the subobject to reparent to..

Blueprint Context: Blueprint Object Reference. Blueprint Context:. Pointer to the blueprint context that this subobject is in. If this is null, it is assumed that. this subobject is being added to an instance..

Actor Preview Context: Actor Object Reference. Actor Preview Context:. The preview actor context to be used if in a blueprint context.. This must have a value if BlueprintContext is needed..

