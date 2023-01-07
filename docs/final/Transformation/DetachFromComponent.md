# DetachFromComponent

把这个组件从它所连接的东西上拆下来。自动解除焊接在一起的组件的焊接（见 WeldTo）。

目标是场景组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144454.png)

## Inputs

在。执行。

目标。场景组件对象参考。

位置规则。EDetachmentRule 枚举。脱离时如何处理翻译。

旋转规则。EDetachmentRule 枚举。脱离时如何处理旋转。

规模规则。EDetachmentRule 枚举。脱离时如何处理鳞片。

调用修改。布尔值。如果为真，在该组件和当前附加的父组件上调用 Modify()。

## Outputs

出：执行。

<hr>

Detach this component from whatever it is attached to. Automatically unwelds components that are welded together (See WeldTo)

Target is Scene Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144454.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Location Rule: EDetachmentRule Enum. How to handle translations when detaching..

Rotation Rule: EDetachmentRule Enum. How to handle rotation when detaching..

Scale Rule: EDetachmentRule Enum. How to handle scales when detaching..

Call Modify: Boolean. If true, call Modify() on the component and the current attach parent component.

## Outputs

Out: Exec.
