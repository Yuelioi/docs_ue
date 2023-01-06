# BindClothtoMasterPoseComponent

如果这个组件有一个有效的MasterPoseComponent，那么这个函数就会使从属组件上的布景项目采取主组件上布景项目的变换，而不是单独模拟。注意：这将迫使主组件上的任何布景角色在本地空间进行模拟。另外。组件中使用的网格必须是相同的，这样布才能正确地绑定。

目标是骨架网格组件

## 图示

![]($-20221218-18174118.png)

## Inputs

在。执行。

目标。骨架网状结构组件对象参考。 

## Outputs

输出。执行。

If this component has a valid MasterPoseComponent then this function makes cloth items on the slave component. take the transforms of the cloth items on the master component instead of simulating separately.. Note: This will FORCE any cloth actor on the master component to simulate in local space. Also. The meshes used in the components must be identical for the cloth to bind correctly

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18174118.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.  

## Outputs

Out: Exec.

