# SetConsumed

Set the job to be consumed. A consumed job is disabled in the UI and should not be. submitted for rendering again. This allows jobs to be added to a queue, the queue. submitted to a remote farm (consume the jobs) and then more jobs to be added and. the second submission to the farm won't re-submit the already in-progress jobs.

Jobs can be unconsumed when the render finishes to re-enable editing.

For C++ implementations override virtual void SetConsumed_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def set_consumed(self, isConsumed):

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20095875.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.

In Consumed: Boolean. True if the job should be consumed and disabled for editing in the UI..  

## Outputs

Out: Exec.

