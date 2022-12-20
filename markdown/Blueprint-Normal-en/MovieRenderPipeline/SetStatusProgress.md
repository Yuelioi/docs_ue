# SetStatusProgress

Set the progress of this job to the given value. If a positive value is provided. the UI will show the progress bar, while a negative value will make the UI show the. status message instead. Progress and Status Message are cosmetic and dependent on the. executor to update. Similar to the UMoviePipelineExecutor::SetStatusProgress function,. but at a per-job level basis instead.

For C++ implementations override virtual void SetStatusProgress_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_status_progress(self, inProgress):

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20100820.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Progress: Float (single-precision). The progress (0-1 range) the executor should have..  

## Outputs

Out: Exec.

