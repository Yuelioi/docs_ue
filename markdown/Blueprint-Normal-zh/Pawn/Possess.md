# Possess

处理将此控制器附加到指定的卒上。只在网络权限上运行（HasAuthority()返回true）。派生的本地类可以覆盖OnPossess来过滤指定的当物。当被占有的卒子发生变化时，蓝图类通过ReceivePossess得到通知，OnNewPawn委托被广播。

目标是控制器

## 图示

![]($-20221218-20193580.png)

## Inputs

在。执行。

目标。控制器对象参考。

在卒中。卒子对象参考。要占有的卒子...  

## Outputs

出：执行。
