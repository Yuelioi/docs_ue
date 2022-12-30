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
