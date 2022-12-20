# GetCachedGeometry

Gets the last geometry used to Tick the widget. This data may not exist yet if this call happens prior to. the widget having been ticked/painted, or it may be out of date, or a frame behind.

We recommend not to use this data unless there's no other way to solve your problem. Normally in Slate we. try and handle these issues by making a dependent widget part of the hierarchy, as to avoid frame behind. or what are referred to as hysteresis problems, both caused by depending on geometry from the previous frame. being used to advise how to layout a dependent object the current frame.

Target is Widget

## 图示

![]($-20221218-21341641.png)

## Inputs

Target: Widget Object Reference.  

## Outputs

Return Value: Geometry Structure (by ref). Gets the last geometry used to Tick the widget. This data may not exist yet if this call happens prior to. the widget having been ticked/painted, or it may be out of date, or a frame behind.: We recommend not to use this data unless there's no other way to solve your problem. Normally in Slate we. try and handle these issues by making a dependent widget part of the hierarchy, as to avoid frame behind. or what are referred to as hysteresis problems, both caused by depending on geometry from the previous frame. being used to advise how to layout a dependent object the current frame..

