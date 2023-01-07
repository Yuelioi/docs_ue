# AddNamedDeviceVisualizationCompo-\_1

为指定的 XR 设备生成一个渲染组件。

注意：相关的 XR 系统后端必须提供一个模型，这样才能发挥作用--如果一个模型对特定的设备不可用，那么这将失败，并返回一个无效的（空）对象。

目标是 XRAsset 函数库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21384821.png)

## Inputs

在。执行。

目标。演员对象参考。该组件的预期所有者，以附加到...

系统名称。名称。(可选）针对一个特定的 XR 系统（例如 "Oculus"、"SteamVR "等）。如果保留为 "无"，那么将使用找到的第一个可以渲染该设备的系统。

设备名称。名称。特定设备的源名称 - 希望与 MotionControllerComponent 的 "MotionSource "字段使用的名称相同（'左'、'右'等）。

手动附件。布尔值。如果设置，将使组件不被附加（镜像与通用的 AddComponent 节点的选项相同）。如果不设置，该组件将附加到角色的根上。

相对转换。变换（通过引用）。指定组件的初始变换（相对于它的附加父体）。

## Outputs

出：执行。

XRD 设备标识。XRDevice Id 结构。

返回值。原始组件对象参考。一个代表指定设备的新组件（如果该设备的模型不存在，则无效/为空）。

<hr>

Spawns a render component for the specified XR device.

NOTE: The associated XR system backend has to provide a model for this to. work - if one is not available for the specific device, then this. will fail and return an invalid (null) object.

Target is XRAsset Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21384821.png)

## Inputs

In: Exec.

Target: Actor Object Reference. The intended owner for the component to attach to..

System Name: Name. (optional) Targets a specific XR system (i.e. 'Oculus', 'SteamVR', etc.). If left as 'None', then the first system found that can render the device will be used..

Device Name: Name. Source name of the specific device - expect the same names that the MotionControllerComponent's "MotionSource" field uses ('Left', 'Right', etc.)..

Manual Attachment: Boolean. If set, will leave the component unattached (mirror's the same option on the generic AddComponent node). When unset the component will attach to the actor's root..

Relative Transform: Transform (by ref). Specifies the component initial transform (relative to its attach parent)..

## Outputs

Out: Exec.

XRDevice Id: XRDevice Id Structure.

Return Value: Primitive Component Object Reference. A new component representing the specified device (invalid/null if a model for the device doesn't exist)..
