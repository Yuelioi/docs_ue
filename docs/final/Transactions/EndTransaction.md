# EndTransaction

试图结束当前的撤销交易。只有当事务的动作计数器为1时才会成功。注意：只在编辑器中可用。

目标是Kismet系统库

## 图示

![]($-20221218-21141857.png)

## Inputs

In: Exec.  

## Outputs

出：执行。

返回值。整数。当EndTransaction被调用时，活动动作的数量（数值为1表示交易被成功关闭），或者失败时为-1。

Attempt to end the current undo transaction. Only successful if the transaction's action counter is 1.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![]($-20221218-21141857.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Return Value: Integer. The number of active actions when EndTransaction was called (a value of 1 indicates that the transaction was successfully closed), or -1 on failure..

