# CopyPropertiestoStaticMesh

Attempt to copy Actor Properties to a StaticMeshActor. Optionally copy DynamicMeshComponent material list to the StaticMeshComponent.. This function is useful when (eg) swapping from a DynamicMeshActor to a StaticMeshActor as it will allow. many configured Actor settings to be preserved (like assigned DataLayers, etc)

Target is Generated Dynamic Mesh Actor

## 图示

![]($-20221218-18454802.png)

## Inputs

In: Exec.

Target: Generated Dynamic Mesh Actor Object Reference.

Static Mesh Actor: Static Mesh Actor Object Reference.

Copy Component Materials: Boolean.  

## Outputs

Out: Exec.

