# UnbindClothfromMasterPoseCompone-

如果这个组件有一个有效的 MasterPoseComponent，并且之前已经将它的布绑定到。MCP，这个函数将解除对布的绑定并恢复模拟。

目标是骨架网状结构组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18175267.png)

## Inputs

在。执行。

目标。Skeletal Mesh Component 对象参考。

Restore Simulation Space（恢复模拟空间）。布尔值。如果为真，并且主姿势布本来是在世界空间中模拟的，我们将恢复这个设置。这将导致主部件重置，这可能是不可取的。

## Outputs

输出。执行：执行。

<hr>

If this component has a valid MasterPoseComponent and has previously had its cloth bound to the. MCP, this function will unbind the cloth and resume simulation.

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18175267.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Restore Simulation Space: Boolean. if true and the master pose cloth was originally simulating in world space, we will restore this setting. This will cause the master component to reset which may be undesirable..

## Outputs

Out: Exec.
