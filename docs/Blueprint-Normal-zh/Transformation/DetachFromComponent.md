# DetachFromComponent

把这个组件从它所连接的东西上拆下来。自动解除焊接在一起的组件的焊接（见WeldTo）。

目标是场景组件

## 图示

![]($-20221218-21144454.png)

## Inputs

在。执行。

目标。场景组件对象参考。

位置规则。EDetachmentRule枚举。脱离时如何处理翻译。

旋转规则。EDetachmentRule枚举。脱离时如何处理旋转。

规模规则。EDetachmentRule枚举。脱离时如何处理鳞片。

调用修改。布尔值。如果为真，在该组件和当前附加的父组件上调用Modify()。  

## Outputs

出：执行。
