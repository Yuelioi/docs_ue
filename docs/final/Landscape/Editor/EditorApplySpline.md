# EditorApplySpline

使用给定的花键对景观进行变形

目标是景观代理

## 图示

![](/uploads/projects/ue-bluprint/20221218-19371163.png)

## Inputs

在。执行。

目标。景观代理对象参考。

在 Spline 组件中。花键组件对象参考。包含花键数据的组件。

开始宽度：浮点数（单精度）。花键在起始节点的宽度，在花键组件本地空间。

端部宽度：浮点数（单精度）。花键末端节点的宽度，在花键组件本地空间。

起始侧衰减。Float（单精度）。在花键开始节点处花键两侧的衰减宽度，在花键组件本地空间。

终端侧的衰减。Float（单精度）。花键末端节点两侧的衰减宽度，在花键组件的本地空间。

开始滚动。Float（单精度）。在起始节点应用于花键的滚动，单位是度。0 是平坦的。

末端滚动。Float（单精度）。应用于花键末端节点的滚动，单位是度。0 是平坦的。

Num Subdivisions:整数。当应用到景观上时，沿样条线放置三角形的数量。数字越大效果越好，但设置得太高会很慢，而且可能会造成假象。

提升高度。布尔值。允许景观被抬高到花键的高度。如果 bRaiseHeights 和 bLowerHeights 都为 false，则不会对景观进行高度修改。

较低的高度。布尔值。允许景观被降低到花键的水平。如果 bRaiseHeights 和 bLowerHeights 都是假的，则不会对景观进行高度修改。

绘画层。景观层信息对象对象参考。要绘制的图层信息，或者没有要跳过绘制。景观必须在它的一个图层中配置相同的图层信息，否则将无能为力！。

编辑图层名称。名称。要影响的景观版图层的名称（在编辑图层模式下）。

## Outputs

出：执行。

<hr>

Deform landscape using a given spline

Target is Landscape Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-19371163.png)

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
