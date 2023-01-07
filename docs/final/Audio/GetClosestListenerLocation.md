# GetClosestListenerLocation

查找并返回离指定位置最近的监听器的位置

目标是游戏规则学

## 图示

![](/uploads/projects/ue-bluprint/20221218-18045113.png)

## Inputs

在。执行。

位置。向量（通过引用）。我们想从那里找到最近的听众的位置，在世界空间中。

最大范围。Float（单精度）。聆听者可以离开 Location 的最大距离。

Allow Attenuation Override: 布尔值。调整后的听众位置为真（如果衰减覆盖被设置），原始听众位置为假（用于平移）。

## Outputs

输出。执行。

听众位置。矢量。[Out] 如果找到的话，世界空间中最近的听众的位置。

返回值。布尔值。如果我们成功地在位置的最大范围内找到一个听众，则为真，否则为假。

<hr>

Finds and returns the position of the closest listener to the specified location

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18045113.png)

## Inputs

In: Exec.

Location: Vector (by ref). The location from which we'd like to find the closest listener, in world space..

Maximum Range: Float (single-precision). The maximum distance away from Location that a listener can be..

Allow Attenuation Override: Boolean. True for the adjusted listener position (if attenuation override is set), false for the raw listener position (for panning).

## Outputs

Out: Exec.

Listener Position: Vector. [Out] The position of the closest listener in world space, if found..

Return Value: Boolean. true if we've successfully found a listener within MaximumRange of Location, otherwise false..
