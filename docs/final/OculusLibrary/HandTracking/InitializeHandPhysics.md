# InitializeHandPhysics

为运行时网格上的碰撞和物理学初始化物理学胶囊。

目标是Oculus输入功能库

## 图示

![]($-20221218-20153306.png)

## Inputs

在。执行。

骨架类型。EOculusHandType枚举。(in) 将用于生成胶囊的骨架类型。

手部组件。有皮网状组件对象参考。(in)胶囊将被连接到的蒙皮网格组件。

世界到米。Float（单精度）。(in)可选择改变世界到米的转换值。  

## Outputs

出：执行。

返回值。Oculus Capsule Collider结构的数组。

Initializes physics capsules for collision and physics on the runtime mesh

Target is Oculus Input Function Library

## 图示

![]($-20221218-20153306.png)

## Inputs

In: Exec.

Skeleton Type: EOculusHandType Enum. (in) The skeleton type that will be used to generated the capsules.

Hand Component: Skinned Mesh Component Object Reference. (in) The skinned mesh component that the capsules will be attached to.

World to Meters: Float (single-precision). (in) Optional change to the world to meters conversion value.  

## Outputs

Out: Exec.

Return Value: Array of Oculus Capsule Collider Structures.

