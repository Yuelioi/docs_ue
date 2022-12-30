# EditorApplySpline

Deform landscape using a given spline

Target is Landscape Proxy

## 图示

![]($-20221218-19371163.png)

## Inputs

In: Exec.

Target: Landscape Proxy Object Reference.

In Spline Component: Spline Component Object Reference. The component containing the spline data.

Start Width: Float (single-precision). Width of the spline at the start node, in Spline Component local space.

End Width: Float (single-precision). Width of the spline at the end node, in Spline Component local space.

Start Side Falloff: Float (single-precision). Width of the falloff at either side of the spline at the start node, in Spline Component local space.

End Side Falloff: Float (single-precision). Width of the falloff at either side of the spline at the end node, in Spline Component local space.

Start Roll: Float (single-precision). Roll applied to the spline at the start node, in degrees. 0 is flat.

End Roll: Float (single-precision). Roll applied to the spline at the end node, in degrees. 0 is flat.

Num Subdivisions: Integer. Number of triangles to place along the spline when applying it to the landscape. Higher numbers give better results, but setting it too high will be slow and may cause artifacts.

Raise Heights: Boolean. Allow the landscape to be raised up to the level of the spline. If both bRaiseHeights and bLowerHeights are false, no height modification of the landscape will be performed.

Lower Heights: Boolean. Allow the landscape to be lowered down to the level of the spline. If both bRaiseHeights and bLowerHeights are false, no height modification of the landscape will be performed.

Paint Layer: Landscape Layer Info Object Object Reference. LayerInfo to paint, or none to skip painting. The landscape must be configured with the same layer info in one of its layers or this will do nothing!.

Edit Layer Name: Name. Name of the landscape edition layer to affect (in Edit Layers mode).  

## Outputs

Out: Exec.

