# CreateDrag_DropOperation

Creates a new drag drop operation

## 图示

![]($-20221218-21214428.png)

## Inputs

In: Exec.

Class: Drag Drop Operation Class Reference. Drag Drop Operation Class Reference Class. The object class you want to construct.

Tag: String. Tag:. A simple string tag you can optionally use to provide extra metadata about the operation..

Payload: Object Reference. Payload:. The payload of the drag operation. This can be any UObject that you want to pass along as dragged data. If you. were building an inventory screen this would be the UObject representing the item being moved to another slot..

Default Drag Visual: Widget Object Reference. Default Drag Visual:. The Drag Visual is the widget to display when dragging the item. Normally people create a new widget to represent the. temporary drag..

Pivot: EDragPivot Enum. Pivot:. Controls where the drag widget visual will appear when dragged relative to the pointer performing. the drag operation..

Offset: Vector 2D Structure. Offset:. A percentage offset (-1..+1) from the Pivot location, the percentage is of the desired size of the dragged visual..  

## Outputs

Out: Exec.

Return Value: Drag Drop Operation Object Reference. Drag Drop Operation Object Reference Return Value. The constructed object.

