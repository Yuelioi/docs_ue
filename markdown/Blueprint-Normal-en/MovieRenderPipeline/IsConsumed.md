# IsConsumed

Gets whether or not the job has been marked as being consumed. A consumed job is not editable. in the UI and should not be submitted for rendering as it is either already finished or. already in progress.

For C++ implementations override virtual bool IsConsumed_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def is_consumed(self):. return ?

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20092167.png)

## Inputs

Target: Movie Pipeline Executor Job Object Reference.  

## Outputs

Return Value: Boolean. Gets whether or not the job has been marked as being consumed. A consumed job is not editable. in the UI and should not be submitted for rendering as it is either already finished or. already in progress.: For C++ implementations override virtual bool IsConsumed_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def is_consumed(self):. return ?.

