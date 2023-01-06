# GetSteamVROriginLocalizedName

检索一个给定动作的原点的本地化名称（例如 "左手指数控制器跟踪板"）。

目标是Steam VRInput设备功能库

## 图示

![]($-20221218-21044063.png)

## Inputs

在。执行。

蒸汽VRAction。Steam VRAction结构。我们将查询最后一个活动原点的行动。

本地化的部分。ESteamVRInputStringBits枚举的数组。用于指定返回哪些原产地部分的位域。  

## Outputs

出：执行。

原产地本地化的名称。字符串。

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

