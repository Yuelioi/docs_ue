# DetectDragifPressed

Given the pointer event, emit the DetectDrag reply if the provided key was pressed.. If the DragKey is a touch key, that will also automatically work.

Target is Widget Blueprint Library

## 图示

![]($-20221218-21334830.png)

## Inputs

In: Exec.

Pointer Event: Pointer Event Structure (by ref). The pointer device event coming in..

Drag Key: Key Structure. This button should be pressed to detect the drag, won't emit the DetectDrag FEventReply unless this is pressed..  

## Outputs

Out: Exec.

Return Value: Event Reply Structure.

