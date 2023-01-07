# IsMoveInputIgnored

查看移动输入是否被忽略的辅助工具。如果没有卒子或 UpdateComponent，则返回 true，否则就交给卒子的 IsMoveInputIgnored()的实现。

目标是卒子运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184712.png)

## Inputs

目标。卒子运动组件对象参考。

## Outputs

返回值。布尔值。帮助查看移动输入是否被忽略。如果没有卒子或 UpdateComponent，则返回 true，否则就交给卒子的 IsMoveInputIgnored()的实现。

<hr>

Helper to see if move input is ignored. If there is no Pawn or UpdatedComponent, returns true, otherwise defers to the Pawn's implementation of IsMoveInputIgnored().

Target is Pawn Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184712.png)

## Inputs

Target: Pawn Movement Component Object Reference.

## Outputs

Return Value: Boolean. Helper to see if move input is ignored. If there is no Pawn or UpdatedComponent, returns true, otherwise defers to the Pawn's implementation of IsMoveInputIgnored()..
