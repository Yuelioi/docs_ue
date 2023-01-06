# PinComponent

将一个虚幻组件钉在跟踪spce(即现实世界)的一个位置上。

目标是ARBlueprint库

## 图示

![]($-20221218-17561301.png)

## Inputs

在。执行。

要钉住的组件：场景组件对象参考。应该被钉住的组件。

Pin to World Transform: Transform (by ref)。与组件应该被钉住的物理位置相对应的一个变换(在虚幻世界空间中)。

Tracked Geometry(追踪的几何体)。ARTracked Geometry Object Reference。一个可选的、被AR系统识别的真实世界的几何体；对这个几何体的位置的任何修正都将被应用到钉住的组件上。

Debug Name（调试名称）。名称。一个可选的名称，当这个引脚被绘制时，将显示为调试目的。 

## Outputs

Out: 执行。

返回值。ARPin对象参考。一个代表将ComponentToPin组件连接到现实世界中的位置并可选择连接到TrackedGeometry的针脚对象。

Pin an Unreal Component to a location in tracking spce (i.e. the real world).

Target is ARBlueprint Library

## 图示

![]($-20221218-17561301.png)

## Inputs

In: Exec.

Component to Pin: Scene Component Object Reference. The component that should be pinned..

Pin to World Transform: Transform (by ref). A transform (in Unreal World Space) that corresponds to a physical location where the component should be pinned..

Tracked Geometry: ARTracked Geometry Object Reference. An optional, real-world geometry that is recognized by the AR system; any correction to the position of this geometry will be applied to the pinned component..

Debug Name: Name. An optional name that will be displayed when this pin is being drawn for debugging purposes..  

## Outputs

Out: Exec.

Return Value: ARPin Object Reference. an object representing the pin that connects \c ComponentToPin component to a real-world location and optionally to the \c TrackedGeometry..

