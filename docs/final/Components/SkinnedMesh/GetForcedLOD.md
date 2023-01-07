# GetForcedLOD

获取网格组件的 ForcedLodModel。注意，实际的强制 LOD 级别是返回值减去 1，0 表示没有强制 LOD。

目标是带皮的网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18264401.png)

## Inputs

目标。Skinned Mesh Component 对象参考。

## Outputs

返回值。整数。获取该网格组件的 ForcedLodModel。注意，实际的强制 LOD 级别是返回值减去 1，0 表示没有强制 LOD。

<hr>

Get ForcedLodModel of the mesh component. Note that the actual forced LOD level is the return value minus one and zero means no forced LOD

Target is Skinned Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18264401.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

## Outputs

Return Value: Integer. Get ForcedLodModel of the mesh component. Note that the actual forced LOD level is the return value minus one and zero means no forced LOD.
