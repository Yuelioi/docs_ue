# GetForcedLOD

获取网格组件的ForcedLodModel。注意，实际的强制LOD级别是返回值减去1，0表示没有强制LOD。

目标是带皮的网格组件

## 图示

![]($-20221218-18264401.png)

## Inputs

目标。Skinned Mesh Component对象参考。 

## Outputs

返回值。整数。获取该网格组件的ForcedLodModel。注意，实际的强制LOD级别是返回值减去1，0表示没有强制LOD。
