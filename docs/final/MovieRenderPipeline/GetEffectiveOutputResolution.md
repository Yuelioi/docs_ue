# GetEffectiveOutputResolution

如果过扫描百分比高于0，我们会渲染额外的像素。该函数返回考虑了过扫描的分辨率。

目标是电影管道蓝图库

## 图示

![]($-20221218-20085011.png)

## Inputs

在。执行。

在主配置中。电影管道主配置对象参考。

在管道执行者拍摄中。电影管道执行器拍摄对象参考。  

## Outputs

出：执行。

返回值。Int 点结构。如果过扫描百分比高于0，我们会渲染额外的像素。该函数返回考虑了过扫描的分辨率。

In case of Overscan percentage being higher than 0 we render additional pixels. This function returns the resolution with overscan taken into account.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20085011.png)

## Inputs

In: Exec.

In Master Config: Movie Pipeline Master Config Object Reference.

In Pipeline Executor Shot: Movie Pipeline Executor Shot Object Reference.  

## Outputs

Out: Exec.

Return Value: Int Point Structure. In case of Overscan percentage being higher than 0 we render additional pixels. This function returns the resolution with overscan taken into account..

