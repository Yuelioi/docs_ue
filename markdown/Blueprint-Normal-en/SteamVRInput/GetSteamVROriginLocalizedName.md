# GetSteamVROriginLocalizedName

Retrieve the localized name of the origin of a given action (e.g. "Left Hand Index Controller Trackpad")

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21044063.png)

## Inputs

In: Exec.

Steam VRAction: Steam VRAction Structure. The action that we will lookup the last active origin for.

Localized Parts: Array of ESteamVRInputStringBits Enums. Bitfields to specify which origin parts to return.  

## Outputs

Out: Exec.

Origin Localized Name: String.

