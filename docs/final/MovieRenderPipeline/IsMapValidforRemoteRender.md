# IsMapValidforRemoteRender

检查是否有Jobs试图指向在远程渲染中无效的地图（即：未保存的地图）。

目标是电影管道编辑器蓝图库

## 图示

![]($-20221218-20092285.png)

## Inputs

在工作中。电影管道执行者工作对象参考数组。  

## Outputs

返回值。布尔值。检查是否有Jobs试图指向在远程渲染中无效的地图（即：未保存的地图）。

Checks to see if any of the Jobs try to point to maps that wouldn't be valid on a remote render (ie: unsaved maps)

Target is Movie Pipeline Editor Blueprint Library

## 图示

![]($-20221218-20092285.png)

## Inputs

In Jobs: Array of Movie Pipeline Executor Job Object References.  

## Outputs

Return Value: Boolean. Checks to see if any of the Jobs try to point to maps that wouldn't be valid on a remote render (ie: unsaved maps).

