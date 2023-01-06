# DetectDrag

要求Slate检测用户以后是否开始在这个小组件中拖动。Slate在内部跟踪移动。如果它超过了拖动阈值，Slate将发送一个OnDragDetected事件给该小组件。

目标是小工具蓝图库

## 图示

![]($-20221218-21334742.png)

## Inputs

答复。事件回复结构（按参考）。

拖动钥匙。按键结构。应按下这个按钮来检测拖动。  

## Outputs

返回值。事件回复结构。

Ask Slate to detect if a user starts dragging in this widget later. Slate internally tracks the movement. and if it surpasses the drag threshold, Slate will send an OnDragDetected event to the widget.

Target is Widget Blueprint Library

## 图示

![]($-20221218-21334742.png)

## Inputs

Reply: Event Reply Structure (by ref).

Drag Key: Key Structure. This button should be pressed to detect the drag.  

## Outputs

Return Value: Event Reply Structure.

