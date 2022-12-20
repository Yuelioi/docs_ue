# BreakDynamicMeshChangeInfo

Adds a node that breaks a 'DynamicMeshChangeInfo' into its member fields

## 图示

![]($-20221218-14353711.png)

## Inputs

Dynamic Mesh Change Info: Dynamic Mesh Change Info Structure (by ref).  

## Outputs

Type: EDynamicMeshChangeType Enum. Type.

Flags: EDynamicMeshAttributeChangeFlags Enum. Flags.

Is Revert Change: Boolean. Is Revert Change:. for changes that are an FChange, indicates whether this is an 'Apply' or 'Revert' of the FChange.

