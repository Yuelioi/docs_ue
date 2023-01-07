# RegisterNavigationInvoker

将给定的角色注册为 "导航执行者"，这意味着导航系统将确保导航在其周围的指定半径内生成。注意：：你需要导航系统的 GenerateNavigationOnlyAroundNavigationInvokers 被设置为 "true"，以利用这个功能。

目标是导航系统 V1

## 图示

![](/uploads/projects/ue-bluprint/20221218-17473756.png)

## Inputs

在。执行。

目标。导航系统 V1 对象参考。

调用者。Actor Object Reference.

瓦片生成半径。浮点数（单精度）。

瓷砖移除半径。浮点（单精度）。

## Outputs

输出。执行。

<hr>

Registers given actor as a "navigation enforcer" which means navigation system will. make sure navigation is being generated in specified radius around it.. Note:: you need NavigationSystem's GenerateNavigationOnlyAroundNavigationInvokers to be set to true. to take advantage of this feature

Target is Navigation System V1

## 图示

![](/uploads/projects/ue-bluprint/20221218-17473756.png)

## Inputs

In: Exec.

Target: Navigation System V1 Object Reference.

Invoker: Actor Object Reference.

Tile Generation Radius: Float (single-precision).

Tile Removal Radius: Float (single-precision).

## Outputs

Out: Exec.
