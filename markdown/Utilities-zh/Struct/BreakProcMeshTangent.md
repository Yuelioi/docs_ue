# BreakProcMeshTangent

Adds a node that breaks a 'ProcMeshTangent' into its member fields

## 图示

![]($-20221218-14412579.png)

## Inputs

Proc Mesh Tangent: Proc Mesh Tangent Structure (by ref).  

## Outputs

Tangent X: Vector. Tangent X:. Direction of X tangent for this vertex.

Flip Tangent Y: Boolean. Flip Tangent Y:. Bool that indicates whether we should flip the Y tangent when we compute it using cross product.

