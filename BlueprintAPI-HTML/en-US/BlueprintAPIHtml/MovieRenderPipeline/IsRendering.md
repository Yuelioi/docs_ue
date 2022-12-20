# IsRendering

Report the current state of the executor. This is used to know if we can call Execute again.

For C++ implementations override virtual bool IsRendering_Implementation() const override For Python/BP implementations override. @unreal.ufunction(override=True). def is_rendering(self):. return ?

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20092398.png)

## Inputs

Target: Movie Pipeline Executor Base Object Reference.  

## Outputs

Return Value: Boolean. True if the executor is currently working on a queue to produce a render..

