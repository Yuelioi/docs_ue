# PredictProjectilePath_Advanced

预测一个受重力影响的虚拟弹体的弧线，并沿弧线进行碰撞检查。如果它击中了什么，则返回真。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19072911.png)

## Inputs

在。执行。

预测参数。预测射弹路径参数结构（通过参考）。轨迹的输入参数（起始位置、速度、模拟时间等）。

## Outputs

出：执行。

预测结果。预测射弹路径结果结构。追踪的输出结果（命中结果，每个追踪步骤的位置/速度/时间阵列，等等）。

返回值。布尔值。如果沿着路径撞到了什么东西，则为真（如果用碰撞追踪）。

<hr>

Predict the arc of a virtual projectile affected by gravity with collision checks along the arc.. Returns true if it hit something.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19072911.png)

## Inputs

In: Exec.

Predict Params: Predict Projectile Path Params Structure (by ref). Input params to the trace (start location, velocity, time to simulate, etc)..

## Outputs

Out: Exec.

Predict Result: Predict Projectile Path Result Structure. Output result of the trace (Hit result, array of location/velocity/times for each trace step, etc)..

Return Value: Boolean. True if hit something along the path (if tracing with collision)..
