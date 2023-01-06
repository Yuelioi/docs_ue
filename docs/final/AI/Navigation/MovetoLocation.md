# MovetoLocation

使AI走向指定的Dest位置，中止任何主动的路径跟踪。

目标是AIController

## 图示

![]($-20221218-17473299.png)

## Inputs

在。执行。

目标。AIController对象参考。

目的地。Vector (by ref).

接受半径。Float (single-precision).如果卒子足够接近，则完成移动。

重叠时停止。布尔值。将小卒的半径添加到AcceptanceRadius。

使用寻路。使用导航数据来计算路径（否则会走直线）。

将目的地投射到导航。布尔值。在使用导航数据之前，在导航数据上预测位置。

可以扫射。布尔值。设置与焦点相关的标志：bAllowStrafe。

过滤器类。导航查询过滤器类参考。导航过滤器用于寻路调整。如果没有指定DefaultNavigationFilterClass将被使用。

允许部分路径。布尔值。当目标无法到达时，使用不完整的路径。 

## Outputs

输出。执行：执行。

返回值。EPathFollowingRequestResult Enum。

Makes AI go toward specified Dest location, aborts any active path following

Target is AIController

## 图示

![]($-20221218-17473299.png)

## Inputs

In: Exec.

Target: AIController Object Reference.

Dest: Vector (by ref).

Acceptance Radius: Float (single-precision). finish move if pawn gets close enough.

Stop on Overlap: Boolean. add pawn's radius to AcceptanceRadius.

Use Pathfinding: Boolean. use navigation data to calculate path (otherwise it will go in straight line).

Project Destination to Navigation: Boolean. project location on navigation data before using it.

Can Strafe: Boolean. set focus related flag: bAllowStrafe.

Filter Class: Navigation Query Filter Class Reference. navigation filter for pathfinding adjustments. If none specified DefaultNavigationFilterClass will be used.

Allow Partial Path: Boolean. use incomplete path when goal can't be reached.  

## Outputs

Out: Exec.

Return Value: EPathFollowingRequestResult Enum.

