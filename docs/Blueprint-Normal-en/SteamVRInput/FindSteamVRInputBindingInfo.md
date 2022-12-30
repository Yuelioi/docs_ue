# FindSteamVRInputBindingInfo

Retrieves useful information about the SteamVR input bindings with a given action name and action set.

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21042261.png)

## Inputs

In: Exec.

Action Name: Name. The name of the action that binding info will be retrieved for the currently active controller.

Action Set: Name. The name of the action set that the action belongs in.  

## Outputs

Out: Exec.

Return Value: Array of Steam VRInput Binding Info Structures. SteamVRInputBindingInfo - Array of binding info for an action with the currently active controller.

