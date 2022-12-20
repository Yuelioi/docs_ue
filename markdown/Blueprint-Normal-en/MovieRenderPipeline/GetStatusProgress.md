# GetStatusProgress

Get the current progress as last set by SetStatusProgress. 0 by default.

For C++ implementations override virtual float GetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_progress(self):. return ?

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20091510.png)

## Inputs

Target: Movie Pipeline Executor Job Object Reference.  

## Outputs

Return Value: Float (single-precision). Get the current progress as last set by SetStatusProgress. 0 by default.: For C++ implementations override virtual float GetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_progress(self):. return ?.

