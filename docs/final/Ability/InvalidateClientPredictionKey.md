# InvalidateClientPredictionKey

使当前的预测键无效。这应该用于以下情况：有一个有效的预测窗口，但服务器正在做只有他能做的逻辑，之后执行了一个客户可以预测的动作（如果客户能够事先运行服务器专用的代码）。这就会立即返回，除了清除当前的预测键外，没有其他副作用。

目标是游戏能力

## 图示

![]($-20221218-17322212.png)

## Inputs

在。执行。

目标。游戏能力的对象参考。 

## Outputs

输出。执行。

Invalidates the current prediction key. This should be used in cases where there is a valid prediction window, but the server is doing logic that only he can do, and afterwards performs an action that the client could predict (had the client been able to run the server-only code prior).. This returns instantly and has no other side effects other than clearing the current prediction key.

Target is Gameplay Ability

## 图示

![]($-20221218-17322212.png)

## Inputs

In: Exec.

Target: Gameplay Ability Object Reference.  

## Outputs

Out: Exec.

