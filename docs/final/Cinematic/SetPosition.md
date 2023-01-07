# SetPosition

设置插值的位置。注意：如果插值目前没有激活，这个函数不会发送任何 Kismet 事件

目标是日场演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-18163933.png)

## Inputs

在。Exec.

目标。Matinee Actor 对象参考。

新位置。Float（单精度）。要设置插值的新位置。

跳跃。布尔值。如果为真，则传送到新的位置（不要在新旧位置之间触发任何事件，等等）。

## Outputs

输出。执行。

<hr>

Set the position of the interpolation.. Note: if the interpolation is not currently active, this function doesn't send any Kismet events

Target is Matinee Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-18163933.png)

## Inputs

In: Exec.

Target: Matinee Actor Object Reference.

New Position: Float (single-precision). the new position to set the interpolation to.

Jump: Boolean. if true, teleport to the new position (don't trigger any events between the old and new positions, etc).

## Outputs

Out: Exec.
