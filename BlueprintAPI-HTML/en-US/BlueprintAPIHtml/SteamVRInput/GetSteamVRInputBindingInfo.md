# GetSteamVRInputBindingInfo

Retrieves useful information about the SteamVR input bindings for an action.

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21043944.png)

## Inputs

In: Exec.

Steam VRAction Handle: Steam VRAction Structure. The action handle of the action that binding info will be retrieved for the currently active controller. Use Find SteamVRAction node to get a handle.  

## Outputs

Out: Exec.

Return Value: Array of Steam VRInput Binding Info Structures. SteamVRInputBindingInfo - Array of binding info for an action with the currently active controller.

