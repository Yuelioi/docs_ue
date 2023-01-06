# SetIgnoreMoveInput

锁定或解锁运动输入，连续的调用堆积起来，需要相同的调用量来撤销，或者可以用ResetIgnoreMoveInput全部撤销。

目标是控制器

## 图示

![]($-20221218-19293018.png)

## Inputs

在。执行。

目标。控制器对象参考。

新的移动输入。布尔值。如果为真，移动输入被忽略。如果是假的，则不忽略输入。  

## Outputs

出：执行。

Locks or unlocks movement input, consecutive calls stack up and require the same amount of calls to undo, or can all be undone using ResetIgnoreMoveInput.

Target is Controller

## 图示

![]($-20221218-19293018.png)

## Inputs

In: Exec.

Target: Controller Object Reference.

New Move Input: Boolean. If true, move input is ignored. If false, input is not ignored..  

## Outputs

Out: Exec.

