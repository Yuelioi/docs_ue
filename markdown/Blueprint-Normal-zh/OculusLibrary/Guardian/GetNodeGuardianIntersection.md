# GetNodeGuardianIntersection

获取被追踪设备（HMD或控制器）与监护人边界之间的交集结果

目标是Oculus功能库

## 图示

![]($-20221218-20151576.png)

## Inputs

在。执行。

设备类型。ETrackedDeviceType枚举。(in) 追踪设备类型，用于测试监护人的边界。

边界类型。EBoundaryType 枚举。(in) 一个代表请求的边界类型的枚举，要么是Outer Boundary（确切的监护人边界），要么是PlayArea（外边界内的矩形）。  

## Outputs

出：执行。

返回值。监护人测试结果结构。
