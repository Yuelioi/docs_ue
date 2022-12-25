# IsAddedActorValid

当快照拍完后有演员被添加到世界中时，就会调用这个功能。

目标是水平快照蓝图过滤器

## 图示

![]($-20221218-19421835.png)

## Inputs

目标。水平快照蓝图过滤器对象参考。

Params:是添加了演员的有效Params结构（通过参考）。  

## Outputs

返回值。EFilterResult枚举。是否跟踪添加的演员。
