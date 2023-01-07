# AddorUpdateWarpTargetfromCompone-

创建并添加或更新一个与指定名称相关的目标

目标是运动扭曲组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20074121.png)

## Inputs

在。执行。

目标。运动翘曲组件对象参考。

经纬度目标名称。名称。经线目标标识符。

组件。场景组件对象参考。用于获取目标变换的场景组件。

骨骼名称。名称。用于获得目标变换的组件中的可选骨骼或插座。

跟随组件。布尔值。翘曲时，目标变换是否应该更新。对于跟踪移动目标很有用。请注意，如果我们的主人在目标角色之前就进行勾选，这将是一帧的偏差。添加 "勾选 "的前提条件以避免这种情况。

## Outputs

出：执行。

<hr>

Create and adds or update a target associated with a specified name

Target is Motion Warping Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20074121.png)

## Inputs

In: Exec.

Target: Motion Warping Component Object Reference.

Warp Target Name: Name. Warp target identifier.

Component: Scene Component Object Reference. Scene Component used to get the target transform.

Bone Name: Name. Optional bone or socket in the component used to get the target transform..

Follow Component: Boolean. Whether the target transform should update while the warping is active. Useful for tracking moving targets. Note that this will be one frame off if our owner ticks before the target actor. Add tick pre-requisites to avoid this..

## Outputs

Out: Exec.
