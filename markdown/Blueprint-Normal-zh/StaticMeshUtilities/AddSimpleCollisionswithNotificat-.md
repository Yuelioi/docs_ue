# AddSimpleCollisionswithNotificat-

为静态网格添加简单碰撞。这个方法复制了在网格编辑器中调用菜单项 "Collision > Add [...] Simplified Collision "时的做法。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21032497.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。网格产生简单的碰撞。

形状类型。EScriptCollisionShapeType枚举。关于将哪种简单碰撞添加到网格的选项。

应用变化。布尔值。表示是否必须应用更改。

## Outputs

出：执行。

返回值。整数。一个整数，表示新创建的碰撞的索引。负值表示添加失败。
