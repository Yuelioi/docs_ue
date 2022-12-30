# OnExecutorFinishedImpl

This should be called when the Executor has finished executing all of the things. it has been asked to execute. This should be called in the event of a failure as. well, and passing in false for success to allow the caller to know failure. Errors. should be broadcast on the error delegate, so this is just a handy way to know at. the end without having to track it yourself.

Target is Movie Pipeline Executor Base

## 图示

![]($-20221218-20093267.png)

## Inputs

In: Exec.

Target: Movie Pipeline Executor Base Object Reference.  

## Outputs

Out: Exec.

