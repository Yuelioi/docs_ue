# PinComponent

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

