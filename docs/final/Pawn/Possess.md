# Possess

处理将此控制器附加到指定的卒上。只在网络权限上运行（HasAuthority()返回 true）。派生的本地类可以覆盖 OnPossess 来过滤指定的当物。当被占有的卒子发生变化时，蓝图类通过 ReceivePossess 得到通知，OnNewPawn 委托被广播。

目标是控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20193580.png)

## Inputs

在。执行。

目标。控制器对象参考。

在卒中。卒子对象参考。要占有的卒子...

## Outputs

出：执行。

<hr>

Handles attaching this controller to the specified pawn.. Only runs on the network authority (where HasAuthority() returns true).. Derived native classes can override OnPossess to filter the specified pawn.. When possessed pawn changed, blueprint class gets notified by ReceivePossess. and OnNewPawn delegate is broadcasted.

Target is Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-20193580.png)

## Inputs

In: Exec.

Target: Controller Object Reference.

In Pawn: Pawn Object Reference. The Pawn to be possessed..

## Outputs

Out: Exec.
