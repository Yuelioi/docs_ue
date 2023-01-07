# HideBonebyName

隐藏带有名称的指定骨骼。目前，这只是为隐藏的骨骼强制执行了一个 0 的比例。与 HideBone By Index 相比--它可以跟踪骨骼列表并在 LOD 变化时进行更新。

目标是带皮的网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18265434.png)

## Inputs

在。执行。

目标。剥皮的网格组件对象参考。

骨骼名称。名称。要隐藏的骨骼名称。

Phys Body Option（身体选项）。EPhysBodyOp 枚举。连接到要隐藏的骨骼上的物理体选项。

## Outputs

输出。Exec.

<hr>

Hides the specified bone with name. Currently this just enforces a scale of 0 for the hidden bones.. Compared to HideBone By Index - This keeps track of list of bones and update when LOD changes

Target is Skinned Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18265434.png)

## Inputs

In: Exec.

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of bone to hide.

Phys Body Option: EPhysBodyOp Enum. Option for physics bodies that attach to the bones to be hidden.

## Outputs

Out: Exec.
