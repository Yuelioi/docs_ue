# GetStatusProgress

获取由SetStatusProgress最后设定的当前进度。默认为0。

对于C++的实现，覆盖虚拟的float GetStatusProgress_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def get_status_progress(self):. return ?

目标是电影管道执行人工作

## 图示

![]($-20221218-20091510.png)

## Inputs

目标。电影管道执行者工作对象参考。  

## Outputs

返回值。浮点数（单精度）。获取由SetStatusProgress最后设定的当前进度。默认为0。对于C++的实现，覆盖虚拟浮点数GetStatusProgress_Implementation() 覆盖 对于Python/BP的实现，覆盖。@unreal.ufunction(override=True). def get_status_progress(self):. return ?

Get the current progress as last set by SetStatusProgress. 0 by default.

For C++ implementations override virtual float GetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_progress(self):. return ?

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20091510.png)

## Inputs

Target: Movie Pipeline Executor Job Object Reference.  

## Outputs

Return Value: Float (single-precision). Get the current progress as last set by SetStatusProgress. 0 by default.: For C++ implementations override virtual float GetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_progress(self):. return ?.

