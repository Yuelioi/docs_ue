# GetAutoDestroySubsystem

获取自动销毁子系统（世界子系统）。

自动销毁子系统管理那些将 bAutoDestroyWhenFinished.设置为 true 的角色。这确保了即使是没有启用 Tick 的角色也能被正确地销毁，同时也使这一行为与 AActor::Tick 脱钩了。

## 图示

![](/uploads/projects/ue-bluprint/20221218-21374301.png)

## Inputs

## Outputs

返回值。自动销毁子系统对象参考。

<hr>

Get Auto Destroy Subsystem (World Subsystem)

The Auto destroy subsystem manages actors who have bAutoDestroyWhenFinished. set as true. This ensures that even actors who do not have Tick enabled. get properly destroyed, as well as decouple this behavior from AActor::Tick

## 图示

![](/uploads/projects/ue-bluprint/20221218-21374301.png)

## Inputs

## Outputs

Return Value: Auto Destroy Subsystem Object Reference.
