# SetSoundClassDistanceScale

线性插值衰减距离刻度值，从它的当前衰减距离覆盖值。(1.0f it not overridden)到其新的衰减距离覆盖值，在给定的时间内。

- 火灾和遗忘。

- 不可复制。

目标是游戏规则

## 图示

![](/uploads/projects/ue-bluprint/20221218-18075065.png)

## Inputs

在。执行。

声音类。声音类的对象参考。用来设置距离衰减比例的声音类。

Distance Attenuation Scale（距离衰减刻度）。Float（单精度）。一个用于计算距离衰减的标度。

时间秒数。Float（单精度）。一个时间值，用于从当前距离衰减标度值线性插值到新值。

## Outputs

输出。执行。

<hr>

Linearly interpolates the attenuation distance scale value from it's current attenuation distance override value. (1.0f it not overridden) to its new attenuation distance override, over the given amount of time

- Fire and Forget.

- Not Replicated.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18075065.png)

## Inputs

In: Exec.

Sound Class: Sound Class Object Reference. Sound class to to use to set the attenuation distance scale on..

Distance Attenuation Scale: Float (single-precision). A scalar for the attenuation distance used for computing distance attenuation..

Time Sec: Float (single-precision). A time value to linearly interpolate from the current distance attenuation scale value to the new value..

## Outputs

Out: Exec.
