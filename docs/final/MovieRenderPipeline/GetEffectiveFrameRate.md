# GetEffectiveFrameRate

返回主配置的帧率覆盖（如果有的话），如果没有指定覆盖，则返回序列帧率。这应该被视为整个管道的实际输出帧率。

目标是电影管道主配置

## 图示

![]($-20221218-20084895.png)

## Inputs

目标。电影管道主配置对象参考。

在序列中。水平序列对象参考。  

## Outputs

返回值。帧速率结构。返回主配置中的帧率覆盖（如果有），如果没有指定覆盖，则返回序列帧率。这应被视为整个管道的实际输出帧率。

Returns the frame rate override from the Master Configuration (if any) or the Sequence frame rate if no override is specified.. This should be treated as the actual output framerate of the overall Pipeline.

Target is Movie Pipeline Master Config

## 图示

![]($-20221218-20084895.png)

## Inputs

Target: Movie Pipeline Master Config Object Reference.

In Sequence: Level Sequence Object Reference.  

## Outputs

Return Value: Frame Rate Structure. Returns the frame rate override from the Master Configuration (if any) or the Sequence frame rate if no override is specified.. This should be treated as the actual output framerate of the overall Pipeline..

