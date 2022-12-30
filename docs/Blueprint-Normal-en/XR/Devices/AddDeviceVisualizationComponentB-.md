# AddDeviceVisualizationComponentB-

Spawns a render component for the specified XR device.

NOTE: The associated XR system backend has to provide a model for this to. work - if one is not available for the specific device, then this. will fail and return an invalid (null) object.

Target is XRAsset Function Library

## 图示

![]($-20221218-21384550.png)

## Inputs

In: Exec.

Target: Actor Object Reference. The intended owner for the component to attach to..

XRDevice Id: XRDevice Id Structure (by ref). Specifies the device you're wanting a model for..

Manual Attachment: Boolean. If set, will leave the component unattached (mirror's the same option on the generic AddComponent node). When unset the component will attach to the actor's root..

Relative Transform: Transform (by ref). Specifies the component initial transform (relative to its attach parent)..  

## Outputs

Out: Exec.

Return Value: Primitive Component Object Reference. A new component representing the specified device (invalid/null if a model for the device doesn't exist)..

