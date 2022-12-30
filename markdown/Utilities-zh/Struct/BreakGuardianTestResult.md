# BreakGuardianTestResult

添加一个节点，将 "GuardianTestResult "分解成其成员字段。

## 图示

![]($-20221218-14375301.png)

## Inputs

监护人测试结果。监护人测试结果结构（按参考）。  

## Outputs

是否触发。布尔型。是否触发：。设备/点与指定边界之间是否存在触发互动？

设备类型。ETrackedDeviceType枚举。设备类型：。触发边界的设备类型（如果BoundaryTestResult对应的是一个点而不是一个设备，则ETrackedDeviceType::None）。

最近的距离。Float（单精度）。最近的距离：。设备/点到BoundaryType指定的边界表面的距离。

最近的点。向量。最近的点：。与指定边界对应的曲面上的最近点。

最接近的点法线。向量。最近点法线：。最靠近的点的法线。
