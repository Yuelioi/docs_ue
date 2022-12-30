# Execute

Execute the provided Queue. You are responsible for deciding how to handle each job. in the queue and processing them. OnExecutorFinished should be called when all jobs. are completed, which can report both success, warning, cancel, or error.

For C++ implementations override virtual void Execute_Implementation() const override For Python/BP implementations override. @unreal.ufunction(override=True). def execute(self):

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20082475.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.

In Pipeline Queue: Movie Pipeline Queue Object Reference. The queue that this should process all jobs for. This can be null when using certain combination of command line render flags/scripting..  

## Outputs

Out: Exec.

