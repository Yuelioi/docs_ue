# GetEstimatedTimeRemaining

获取当前流水线的估计剩余时间。基于要渲染的样本总量与到目前为止已经完成的样本数量。在使用时间扩张时不准确，在渲染过程中会变得更准确。

目标是电影管道蓝图库

## 图示

![]($-20221218-20085124.png)

## Inputs

在管道中。电影管道对象参考。获取时间估计的管道，从...

## Outputs

外界估计。Timespan结构。得到的估计值，如果估计值无效，则为FTimespan()。

返回值。布尔值。如果可以计算出一个有效的估计值，则为真；如果还没有准备好（即：没有足够的样本呈现），则为假。

Get the estimated amount of time remaining for the current pipeline. Based on looking at the total. amount of samples to render vs. how many have been completed so far. Inaccurate when Time Dilation. is used, and gets more accurate over the course of the render.

Target is Movie Pipeline Blueprint Library

## 图示

![]($-20221218-20085124.png)

## Inputs

In Pipeline: Movie Pipeline Object Reference. The pipeline to get the time estimate from..  

## Outputs

Out Estimate: Timespan Structure. The resulting estimate, or FTimespan() if estimate is not valid..

Return Value: Boolean. True if a valid estimate can be calculated, or false if it is not ready yet (ie: not enough samples rendered).

