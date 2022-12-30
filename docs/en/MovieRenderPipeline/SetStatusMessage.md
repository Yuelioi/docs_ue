# SetStatusMessage

Set the status of this job to the given value. This will be shown on the UI if progress. is set to a value less than zero. If progress is > 0 then the progress bar will be shown. on the UI instead. Progress and Status Message are cosmetic and dependent on the. executor to update. Similar to the UMoviePipelineExecutor::SetStatusMessage function,. but at a per-job level basis instead.

For C++ implementations override virtual void SetStatusMessage_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_status_message(self, inStatus):

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20100707.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Status: String. The status message you wish the executor to have..  

## Outputs

Out: Exec.

