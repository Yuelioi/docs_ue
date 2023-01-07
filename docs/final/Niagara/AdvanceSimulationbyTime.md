# AdvanceSimulationbyTime

将这个系统的模拟提前到指定的时间（秒）和 delta 时间。推进的单位是 TickDeltaSeconds 的整点，所以实际的模拟时间将是 TickDeltaSeconds 的最接近的低倍数。

目标是 Niagara 粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20115447.png)

## Inputs

在。执行。

目标。尼亚加拉粒子系统组件对象参考。

模拟时间。Float (single-precision).

Tick Delta Seconds:Float（单精度）。

## Outputs

出：执行。

<hr>

Advances this system's simulation by the specified time in seconds and delta time. Advancement is done in whole ticks of TickDeltaSeconds so actual simulated time will be the nearest lower multiple of TickDeltaSeconds.

Target is Niagara Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20115447.png)

## Inputs

In: Exec.

Target: Niagara Particle System Component Object Reference.

Simulate Time: Float (single-precision).

Tick Delta Seconds: Float (single-precision).

## Outputs

Out: Exec.
