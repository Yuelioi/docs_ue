# AddNamedDeviceVisualizationCompo-_1

为指定的XR设备生成一个渲染组件。

注意：相关的XR系统后端必须提供一个模型，这样才能发挥作用--如果一个模型对特定的设备不可用，那么这将失败，并返回一个无效的（空）对象。

目标是XRAsset函数库

## 图示

![]($-20221218-21384821.png)

## Inputs

在。执行。

目标。演员对象参考。该组件的预期所有者，以附加到...

系统名称。名称。(可选）针对一个特定的XR系统（例如 "Oculus"、"SteamVR "等）。如果保留为 "无"，那么将使用找到的第一个可以渲染该设备的系统。

设备名称。名称。特定设备的源名称 - 希望与MotionControllerComponent的 "MotionSource "字段使用的名称相同（'左'、'右'等）。

手动附件。布尔值。如果设置，将使组件不被附加（镜像与通用的AddComponent节点的选项相同）。如果不设置，该组件将附加到角色的根上。

相对转换。变换（通过引用）。指定组件的初始变换（相对于它的附加父体）。  

## Outputs

出：执行。

XRD设备标识。XRDevice Id结构。

返回值。原始组件对象参考。一个代表指定设备的新组件（如果该设备的模型不存在，则无效/为空）。
