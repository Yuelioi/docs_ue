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