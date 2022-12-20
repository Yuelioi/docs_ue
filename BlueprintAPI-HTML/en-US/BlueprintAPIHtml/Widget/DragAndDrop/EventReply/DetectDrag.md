# DetectDrag

Ask Slate to detect if a user starts dragging in this widget later. Slate internally tracks the movement. and if it surpasses the drag threshold, Slate will send an OnDragDetected event to the widget.

Target is Widget Blueprint Library

## 图示

![]($-20221218-21334742.png)

## Inputs

Reply: Event Reply Structure (by ref).

Drag Key: Key Structure. This button should be pressed to detect the drag.  

## Outputs

Return Value: Event Reply Structure.

