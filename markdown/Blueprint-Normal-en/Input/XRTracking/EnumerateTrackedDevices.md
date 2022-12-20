# EnumerateTrackedDevices

Cross XR-System query that will list all XR devices currently being tracked.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19301298.png)

## Inputs

In: Exec.

System Id: Name. (Optional) Specifies an explicit system to poll devices from (use if you want only devices belonging to one explicit XR ecosystem, e.g. 'OculusHMD', or 'SteamVR').

Device Type: EXRTrackedDeviceType Enum. Specifies the type of device to query for - defaults to 'Any' (meaning 'All')..  

## Outputs

Out: Exec.

Return Value: Array of XRDevice Id Structures. A list of device identifiers matching the query. Use these to query and operate on the device (e.g. through GetDevicePose, AddDeviceVisualizationComponent, etc.).

