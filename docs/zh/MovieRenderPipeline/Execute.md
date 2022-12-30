# Execute

执行提供的队列。你负责决定如何处理队列中的每个作业，并处理它们。OnExecutorFinished应该在所有作业完成后被调用，它可以同时报告成功、警告、取消或错误。

对于C++的实现，覆盖虚拟的void Execute_Implementation() const 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def execute(self):

目标是电影管道执行者基地

## 图示

![]($-20221218-20082475.png)

## Inputs

在。执行。

目标。电影管道执行器基础对象参考。

在管线队列中。电影 Pipeline Queue 对象参考。这个队列应该处理所有的工作。当使用特定的命令行渲染标志/脚本组合时，这可能是空的。

## Outputs

出：执行。
