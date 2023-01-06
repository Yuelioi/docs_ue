# GetTrackingtoWorldTransform

返回一个可用于将点从跟踪空间转换到世界空间的变换。不包括设置的WorldToMeters比例，因为那是由支持XR系统添加到其跟踪空间姿势中的。

目标是头戴式显示器功能库

## 图示

![]($-20221218-19235275.png)

## Inputs

In: Exec.  

## Outputs

出：执行。

返回值。变换。返回一个可以用来将点从追踪空间转换到世界空间的变换。不包括设置的WorldToMeters比例，因为那是由支持XR系统添加到他们的跟踪空间位置中的。

Returns a transform that can be used to convert points from tracking space to world space.. Does NOT include the set WorldToMeters scale, as that is added in by the backing XR system to their tracking space poses.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19235275.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Return Value: Transform. Returns a transform that can be used to convert points from tracking space to world space.. Does NOT include the set WorldToMeters scale, as that is added in by the backing XR system to their tracking space poses..

