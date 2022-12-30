# SetDynamicMesh

Set the child UDynamicMesh. This can be used to 'share' a UDynamicMesh between Component instances.. @warning Currently this is somewhat risky, it is on the caller/clients to make sure that the actual mesh is not being simultaneously modified on multiple threads

Target is Dynamic Mesh Component

## 图示

![]($-20221218-18461374.png)

## Inputs

In: Exec.

Target: Dynamic Mesh Component Object Reference.

New Mesh: Dynamic Mesh Object Reference.  

## Outputs

Out: Exec.

