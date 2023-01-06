# LineTraceComponent

对一个单一的组件进行线追踪

目标是原始组件

## 图示

![]($-20221218-18191826.png)

## Inputs

在。执行。

目标。原始组件对象参考。

跟踪开始。矢量。世界空间中追踪的起点。

追踪结束。向量。轨迹在世界空间中的终点。

Trace Complex：布尔值。是否追踪复杂的物理表征，或者只追踪简单的表征。

显示追踪。布尔值。是否在世界空间中绘制轨迹（用于调试）。

持久显示追踪。布尔值。是否让调试时的绘图永久停留在世界中。 

## Outputs

输出。执行：执行。

击中位置。矢量。

Hit Normal: 向量。

骨头名称。名称。

Out Hit: 命中结果结构。

返回值。布尔值。

Perform a line trace against a single component

Target is Primitive Component

## 图示

![]($-20221218-18191826.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Trace Start: Vector. The start of the trace in world-space.

Trace End: Vector. The end of the trace in world-space.

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

