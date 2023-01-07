# MoveComponentTo

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18245502.png)

## Inputs

移动：执行。在指定时间内移动到目标。

停止：执行。如果当前正在移动，停止。

返回。执行。如果当前正在移动，则返回到你开始的地方，在迄今为止的时间内完成。

组件。场景组件对象参考。要插补的组件 \*.

目标相对位置。矢量。目标的相对位置 \*.

目标相对旋转。旋转器。相对的目标旋转 \*.

Ease Out（缓和）。如果为真，我们将在插值期间缓和（即缓慢结束） \*.

缓进：布尔值。如果为真，我们将在插值过程中缓和（即慢慢开始） \*.

超过时间。Float（单精度）。插值的持续时间 \*.

强制最短旋转路径。如果为真，我们将始终使用最短路径进行旋转 \*.

## Outputs

已完成。执行。

<hr>

-

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18245502.png)

## Inputs

Move: Exec. Move to target over specified time..

Stop: Exec. If currently moving, stop..

Return: Exec. If currently moving, return to where you started, over the time elapsed so far..

Component: Scene Component Object Reference. Component to interpolate \*.

Target Relative Location: Vector. Relative target location \*.

Target Relative Rotation: Rotator. Relative target rotation \*.

Ease Out: Boolean. if true we will ease out (ie end slowly) during interpolation \*.

Ease In: Boolean. if true we will ease in (ie start slowly) during interpolation \*.

Over Time: Float (single-precision). duration of interpolation \*.

Force Shortest Rotation Path: Boolean. if true we will always use the shortest path for rotation \*.

## Outputs

Completed: Exec.
