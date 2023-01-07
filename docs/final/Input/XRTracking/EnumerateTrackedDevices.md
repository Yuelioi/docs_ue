# EnumerateTrackedDevices

跨 XR-系统查询，将列出当前被跟踪的所有 XR 设备。

目标是头戴式显示器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19301298.png)

## Inputs

在。执行。

系统标识。名称。(可选）指定一个明确的系统来轮询设备（如果你只想要属于一个明确的 XR 生态系统的设备，例如 "OculusHMD "或 "SteamVR"，则可使用）。

设备类型。EXRTrackedDeviceType 枚举。指定要查询的设备类型 - 默认为'Any'（意思是'所有'）。

## Outputs

出：执行。

返回值。XRDevice Id 结构的数组。匹配查询的设备标识符的列表。使用这些来查询和操作设备（例如，通过 GetDevicePose、AddDeviceVisualizationComponent 等）。

<hr>

Cross XR-System query that will list all XR devices currently being tracked.

Target is Head Mounted Display Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19301298.png)

## Inputs

In: Exec.

System Id: Name. (Optional) Specifies an explicit system to poll devices from (use if you want only devices belonging to one explicit XR ecosystem, e.g. 'OculusHMD', or 'SteamVR').

Device Type: EXRTrackedDeviceType Enum. Specifies the type of device to query for - defaults to 'Any' (meaning 'All')..

## Outputs

Out: Exec.

Return Value: Array of XRDevice Id Structures. A list of device identifiers matching the query. Use these to query and operate on the device (e.g. through GetDevicePose, AddDeviceVisualizationComponent, etc.).
