# GetDeltaTransformfromRefPose

根据 BaseNode.从参考姿势获得 delta 变换。这使用最后一帧最新的变换，所以如果你在 AnimGraph 中使用这个信息，它将有一帧延迟。

目标是带皮的网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18264286.png)

## Inputs

目标。剥皮的网格组件对象参考。

骨骼名称。名称。骨头的名称。

Base Name（基础名称）。名称。基础骨骼的名称 - 如果没有，它将使用父骨骼作为基础。

## Outputs

返回值。Transform。在给定的空间（BaseName）中，从 Refpose 开始的 delta 变换。

<hr>

Get delta transform from reference pose based on BaseNode.. This uses last frame up-to-date transform, so it will have a frame delay if you use this info in the AnimGraph

Target is Skinned Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18264286.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of the bone.

Base Name: Name. Name of the base bone - if none, it will use parent as a base.

## Outputs

Return Value: Transform. the delta transform from refpose in that given space (BaseName).
