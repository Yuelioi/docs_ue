# DestroyComponent

取消注册并标记为待杀的组件。除非拥有的角色正在调用这个函数，否则不能用它来销毁一个由角色拥有的组件。

目标是行为体组件

## 图示

![]($-20221218-18232141.png)

## Inputs

在。执行。

目标。Actor Component Object Reference。 

## Outputs

输出。执行。

Unregister and mark for pending kill a component. This may not be used to destroy a component that is owned by an actor unless the owning actor is calling the function.

Target is Actor Component

## 图示

![]($-20221218-18232141.png)

## Inputs

In: Exec.

Target: Actor Component Object Reference.  

## Outputs

Out: Exec.

