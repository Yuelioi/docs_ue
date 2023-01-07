# GetCachedGeometry

获取最后用于勾选该小组件的几何图形。如果这个调用发生在小组件被勾选/涂抹之前，这个数据可能还不存在，或者它可能已经过时，或者落后一帧。

我们建议不要使用这个数据，除非没有其他方法来解决你的问题。通常在 Slate 中，我们尝试通过使依赖性部件成为层次结构的一部分来处理这些问题，以避免帧的落后，或被称为滞后的问题，两者都是由于依赖前一帧的几何图形而引起的。

目标是小工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-21341641.png)

## Inputs

目标。小工具对象参考。

## Outputs

返回值。几何结构（通过引用）。获取最后用于勾选小部件的几何体。如果这个调用发生在小部件被勾选/涂抹之前，这个数据可能还不存在，或者它可能已经过时，或者落后一帧。我们建议不要使用这个数据，除非没有其他方法来解决你的问题。通常在 Slate 中，我们试图通过使依赖的部件成为层次结构的一部分来处理这些问题，以避免落后于框架或被称为滞后的问题，这两种问题都是由于依赖前一帧的几何图形而引起的，被用来建议如何布局当前框架的依赖对象。

<hr>

Gets the last geometry used to Tick the widget. This data may not exist yet if this call happens prior to. the widget having been ticked/painted, or it may be out of date, or a frame behind.

We recommend not to use this data unless there's no other way to solve your problem. Normally in Slate we. try and handle these issues by making a dependent widget part of the hierarchy, as to avoid frame behind. or what are referred to as hysteresis problems, both caused by depending on geometry from the previous frame. being used to advise how to layout a dependent object the current frame.

Target is Widget

## 图示

![](/uploads/projects/ue-bluprint/20221218-21341641.png)

## Inputs

Target: Widget Object Reference.

## Outputs

Return Value: Geometry Structure (by ref). Gets the last geometry used to Tick the widget. This data may not exist yet if this call happens prior to. the widget having been ticked/painted, or it may be out of date, or a frame behind.: We recommend not to use this data unless there's no other way to solve your problem. Normally in Slate we. try and handle these issues by making a dependent widget part of the hierarchy, as to avoid frame behind. or what are referred to as hysteresis problems, both caused by depending on geometry from the previous frame. being used to advise how to layout a dependent object the current frame..
