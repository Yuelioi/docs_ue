# ReceiveParticleData_Message

这个函数在每一次嘀嗒声中被调用一次，并收集到粒子数据。如果没有粒子数据可供调用，它将不会被调用。

目标是Niagara粒子回调处理程序

## 图示

![]($-20221218-20131346.png)

## Inputs

在。执行。

目标。对象参考。

数据。基本粒子数据结构的阵列。

尼亚加拉系统。尼亚加拉系统对象参考。

仿真位置偏移。矢量（通过参考）。  

## Outputs

出：执行。

This function is called once per tick with the gathered particle data. It will not be called if there is no particle data to call it with.

Target is Niagara Particle Callback Handler

## 图示

![]($-20221218-20131346.png)

## Inputs

In: Exec.

Target: Object Reference.

Data: Array of Basic Particle Data Structures.

Niagara System: Niagara System Object Reference.

Simulation Position Offset: Vector (by ref).  

## Outputs

Out: Exec.

