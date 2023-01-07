# AddSimpleCollisionswithNotificat-

为静态网格添加简单碰撞。这个方法复制了在网格编辑器中调用菜单项 "Collision > Add [...] Simplified Collision "时的做法。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21032497.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。网格产生简单的碰撞。

形状类型。EScriptCollisionShapeType 枚举。关于将哪种简单碰撞添加到网格的选项。

应用变化。布尔值。表示是否必须应用更改。

## Outputs

出：执行。

返回值。整数。一个整数，表示新创建的碰撞的索引。负值表示添加失败。

<hr>

Add simple collisions to a static mesh.. This method replicates what is done when invoking menu entries "Collision > Add [...] Simplified Collision" in the Mesh Editor.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21032497.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Mesh to generate simple collision for..

Shape Type: EScriptCollisionShapeType Enum. Options on which simple collision to add to the mesh..

Apply Changes: Boolean. Indicates if changes must be apply or not..

## Outputs

Out: Exec.

Return Value: Integer. An integer indicating the index of the collision newly created. A negative value indicates the addition failed..
