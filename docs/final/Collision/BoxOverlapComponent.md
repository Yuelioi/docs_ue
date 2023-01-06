# BoxOverlapComponent

以AABB的方式对单一组件进行盒式重叠（无旋转）。

目标是原始组件

## 图示

![]($-20221218-18183062.png)

## Inputs

在。执行。

目标。原始组件对象参考。

在箱体中心。矢量。与组件重叠的盒子的中心。

在盒子里。盒子结构。重叠时使用的盒子的描述。

Trace Complex：布尔值。是否追踪复杂的物理表征或只是简单的表征。

显示追踪。布尔值。是否在世界范围内绘制轨迹（用于调试）。

持久显示追踪。布尔值。是否让调试时的绘图永久停留在世界中。 

## Outputs

输出。执行：执行。

击中位置。矢量。

Hit Normal: 向量。

骨头名称。名称。

Out Hit: 命中结果结构。

返回值。布尔值。

Perform a box overlap against a single component as an AABB (No rotation)

Target is Primitive Component

## 图示

![]($-20221218-18183062.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

In Box Centre: Vector. The centre of the box to overlap with the component.

In Box: Box Structure. Description of the box to use in the overlap.

Trace Complex: Boolean. Whether or not to trace the complex physics representation or just the simple representation.

Show Trace: Boolean. Whether or not to draw the trace in the world (for debugging).

Persistent Show Trace: Boolean. Whether or not to make the debugging draw stay in the world permanently.  

## Outputs

Out: Exec.

Hit Location: Vector.

Hit Normal: Vector.

Bone Name: Name.

Out Hit: Hit Result Structure.

Return Value: Boolean.

