# IsDeletedComponentValid

当一个组件在快照拍摄后被从一个角色中移除时，这个功能被调用。

目标是水平快照蓝图过滤器

## 图示

![]($-20221218-19422146.png)

## Inputs

目标。水平快照蓝图过滤器对象参考。

Params:被删除的组件是否为有效的Params结构（通过参考）。  

## Outputs

返回值。EFilterResult枚举。是否追踪被删除的组件。
