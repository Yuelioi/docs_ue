# AddNamedDeviceVisualizationCompo-_1

Spawns a render component for the specified XR device.

NOTE: The associated XR system backend has to provide a model for this to. work - if one is not available for the specific device, then this. will fail and return an invalid (null) object.

Target is XRAsset Function Library

## 图示

![]($-20221218-21384821.png)

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

