# SetFadeOut

设置贴花的褪色开始时间、持续时间，以及在贴花完全褪色后是否要销毁拥有的角色。FadeStartDelay和FadeDuration的默认值为0，使贴花持久化。见DecalLifetimeOpacity material.节点来控制 "淡出 "的外观。

目标是贴花组件

## 图示

![]($-20221218-20334116.png)

## Inputs

在。执行。

目标。贴花组件对象参考。

开始延时。Float（单精度）。在开始淡出贴花前等待的时间，单位是秒。

持续时间。Float（单精度）。花花公子淡出的时间，以秒为单位。

淡出后销毁所有者。布尔值。拥有的角色在完全淡出后是否应自动销毁。

## Outputs

出：执行。

Sets the decal's fade start time, duration and if the owning actor should be destroyed after the decal is fully faded out.. The default value of 0 for FadeStartDelay and FadeDuration makes the decal persistent. See DecalLifetimeOpacity material. node to control the look of "fading out."

Target is Decal Component

## 图示

![]($-20221218-20334116.png)

## Inputs

In: Exec.

Target: Decal Component Object Reference.

Start Delay: Float (single-precision). Time in seconds to wait before beginning to fade out the decal..

Duration: Float (single-precision). Time in second for the decal to fade out..

Destroy Owner After Fade: Boolean. Should the owning actor automatically be destroyed after it is completely faded out..  

## Outputs

Out: Exec.

