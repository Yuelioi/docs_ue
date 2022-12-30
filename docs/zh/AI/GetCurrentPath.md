# GetCurrentPath

返回一个新的UOBJECT，它是给定控制器当前使用的导航路径的一个副本。结果是一个副本，意味着你不能通过操纵收到的路径来影响代理的路径跟踪。如果你只需要路径点的阵列，请使用GetCurrentPathPoints。

目标是AIBlueprint Helper Library

## 图示

![]($-20221218-17463821.png)

## Inputs

控制器。控制器对象参考。 

## Outputs

返回值。导航路径对象参考。返回一个新的UOBJECT，它是给定控制器当前使用的导航路径的副本。结果是一个副本，意味着你不能通过操纵接收到的路径来影响代理的路径跟踪。如果你只需要路径点的阵列，请使用GetCurrentPathPoints。
