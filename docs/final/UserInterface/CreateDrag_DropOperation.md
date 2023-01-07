# CreateDrag_DropOperation

创建一个新的拖放操作

## 图示

![](/uploads/projects/ue-bluprint/20221218-21214428.png)

## Inputs

在。执行。

类。拖放操作类参考。拖放操作类的参考类。你想要构建的对象类。

标签。字符串。标签：.一个简单的字符串标签，你可以选择性地用来提供关于操作的额外元数据。

有效载荷。对象参考。有效载荷：。拖动操作的有效载荷。这可以是你想作为拖动数据传递的任何 UObject。如果你正在建立一个库存屏幕，这将是代表物品被移动到另一个槽的 UObject。

默认的拖动视觉: Widget 对象参考。默认拖动视觉：。拖动视觉是拖动项目时要显示的小部件。通常人们会创建一个新的小部件来代表。临时拖动...

枢轴。EDragPivot Enum.Pivot:.控制相对于执行拖动操作的指针拖动时，拖动部件的视觉效果将出现在哪里。

偏移。矢量 2D 结构。偏移量：。从 Pivot 位置出发的偏移百分比（-1...+1），该百分比是拖动视觉的理想尺寸。

## Outputs

出：执行。

返回值。拖放操作对象参考。拖放操作对象参考 返回值。构建的对象。

<hr>

Creates a new drag drop operation

## 图示

![](/uploads/projects/ue-bluprint/20221218-21214428.png)

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
