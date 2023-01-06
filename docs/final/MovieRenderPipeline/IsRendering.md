# IsRendering

报告执行器的当前状态。这是用来知道我们是否可以再次调用Execute。

对于C++的实现，覆盖虚拟 bool IsRendering_Implementation() const 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def is_rendering(self):. return ?

目标是电影管道执行者基地

## 图示

![]($-20221218-20092398.png)

## Inputs

目标。电影管道执行器基础对象参考。  

## Outputs

返回值。布尔值。如果执行器目前正在一个队列中工作，产生一个渲染，则为真。

Report the current state of the executor. This is used to know if we can call Execute again.

For C++ implementations override virtual bool IsRendering_Implementation() const override For Python/BP implementations override. @unreal.ufunction(override=True). def is_rendering(self):. return ?

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20092398.png)

## Inputs

Target: Movie Pipeline Executor Base Object Reference.  

## Outputs

Return Value: Boolean. True if the executor is currently working on a queue to produce a render..

