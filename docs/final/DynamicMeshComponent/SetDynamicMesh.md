# SetDynamicMesh

设置子UDynamicMesh。这可以用来在组件实例之间 "共享 "一个UDynamicMesh。@警告 目前这有点冒险，调用者/客户端要确保实际的网格不会在多个线程上同时被修改。

目标是动态网格组件

## 图示

![]($-20221218-18461374.png)

## Inputs

在。执行。

目标。动态网格组件对象参考。

新的网格。动态网格对象参考。

## Outputs

出：执行。
Set the child UDynamicMesh. This can be used to 'share' a UDynamicMesh between Component instances.. @warning Currently this is somewhat risky, it is on the caller/clients to make sure that the actual mesh is not being simultaneously modified on multiple threads

Target is Dynamic Mesh Component

## 图示

![]($-20221218-18461374.png)

## Inputs

In: Exec.

Target: Dynamic Mesh Component Object Reference.

New Mesh: Dynamic Mesh Object Reference.  

## Outputs

Out: Exec.

