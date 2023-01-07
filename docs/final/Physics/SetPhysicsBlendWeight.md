# SetPhysicsBlendWeight

这是用于设置物理学混合重量的全局设置。这将自动做很多事情。如果 PhysicsBlendWeight == 1.f，它将启用模拟，如果 PhysicsBlendWeight == 0.f，它将禁用模拟。同时，它将尊重每个体的设置，所以如果体是固定的，它将不会模拟。反之亦然。所以如果你想让所有的体都手动改变，不要使用这个函数，而是使用 SetAllBodiesPhysicsBlendWeight。

目标是骨架网组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285911.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

物理学混合重量。Float（单精度）。

## Outputs

出：执行。

<hr>

This is global set up for setting physics blend weight. This does multiple things automatically. If PhysicsBlendWeight == 1.f, it will enable Simulation, and if PhysicsBlendWeight == 0.f, it will disable Simulation.. Also it will respect each body's setup, so if the body is fixed, it won't simulate. Vice versa. So if you'd like all bodies to change manually, do not use this function, but SetAllBodiesPhysicsBlendWeight

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20285911.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Physics Blend Weight: Float (single-precision).

## Outputs

Out: Exec.
