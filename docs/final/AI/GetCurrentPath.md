# GetCurrentPath

返回一个新的UOBJECT，它是给定控制器当前使用的导航路径的一个副本。结果是一个副本，意味着你不能通过操纵收到的路径来影响代理的路径跟踪。如果你只需要路径点的阵列，请使用GetCurrentPathPoints。

目标是AIBlueprint Helper Library

## 图示

![]($-20221218-17463821.png)

## Inputs

控制器。控制器对象参考。 

## Outputs

返回值。导航路径对象参考。返回一个新的UOBJECT，它是给定控制器当前使用的导航路径的副本。结果是一个副本，意味着你不能通过操纵接收到的路径来影响代理的路径跟踪。如果你只需要路径点的阵列，请使用GetCurrentPathPoints。

Returns a NEW UOBJECT that is a COPY of navigation path given controller is currently using.. The result being a copy means you won't be able to influence agent's pathfollowing. by manipulating received path.. Please use GetCurrentPathPoints if you only need the array of path points.

Target is AIBlueprint Helper Library

## 图示

![]($-20221218-17463821.png)

## Inputs

Controller: Controller Object Reference.  

## Outputs

Return Value: Navigation Path Object Reference. Returns a NEW UOBJECT that is a COPY of navigation path given controller is currently using.. The result being a copy means you won't be able to influence agent's pathfollowing. by manipulating received path.. Please use GetCurrentPathPoints if you only need the array of path points..

