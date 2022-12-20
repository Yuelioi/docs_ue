# OnDuplicated

Should be called to clear status and user data after duplication so that jobs stay. unique and don't pick up ids or other unwanted behavior from the pareant job.

For C++ implementations override virtual bool OnDuplicated_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def on_duplicated(self):

Target is Movie Pipeline Executor Job

## 图示

![]($-20221218-20092859.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Job Object Reference.  

## Outputs

Out: Exec.

