# SetPhysicsBlendWeight

This is global set up for setting physics blend weight. This does multiple things automatically. If PhysicsBlendWeight == 1.f, it will enable Simulation, and if PhysicsBlendWeight == 0.f, it will disable Simulation.. Also it will respect each body's setup, so if the body is fixed, it won't simulate. Vice versa. So if you'd like all bodies to change manually, do not use this function, but SetAllBodiesPhysicsBlendWeight

Target is Skeletal Mesh Component

## 图示

![]($-20221218-20285911.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Physics Blend Weight: Float (single-precision).  

## Outputs

Out: Exec.

