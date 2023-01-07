# DetectDragifPressed

给出指针事件，如果提供的键被按下，就发出 DetectDrag 回复。如果 DragKey 是一个触摸键，那也会自动工作。

目标是小工具蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21334830.png)

## Inputs

在。执行。

指针事件。指针事件结构（通过引用）。指针设备事件的来...

拖动钥匙。按键结构。这个按钮应该被按下以检测拖动，除非按下这个按钮，否则不会发出 DetectDrag FEventReply 的声音。

## Outputs

出：执行。

返回值。事件回复结构。

<hr>

Given the pointer event, emit the DetectDrag reply if the provided key was pressed.. If the DragKey is a touch key, that will also automatically work.

Target is Widget Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21334830.png)

## Inputs

In: Exec.

Pointer Event: Pointer Event Structure (by ref). The pointer device event coming in..

Drag Key: Key Structure. This button should be pressed to detect the drag, won't emit the DetectDrag FEventReply unless this is pressed..

## Outputs

Out: Exec.

Return Value: Event Reply Structure.
