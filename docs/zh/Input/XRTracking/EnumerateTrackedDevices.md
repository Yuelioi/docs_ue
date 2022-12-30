# EnumerateTrackedDevices

跨XR-系统查询，将列出当前被跟踪的所有XR设备。

目标是头戴式显示器功能库

## 图示

![]($-20221218-19301298.png)

## Inputs

在。执行。

系统标识。名称。(可选）指定一个明确的系统来轮询设备（如果你只想要属于一个明确的XR生态系统的设备，例如 "OculusHMD "或 "SteamVR"，则可使用）。

设备类型。EXRTrackedDeviceType枚举。指定要查询的设备类型 - 默认为'Any'（意思是'所有'）。

## Outputs

出：执行。

返回值。XRDevice Id结构的数组。匹配查询的设备标识符的列表。使用这些来查询和操作设备（例如，通过GetDevicePose、AddDeviceVisualizationComponent等）。
