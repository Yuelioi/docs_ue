# AllocateNewJob

Allocates a new Job in this Queue. The Queue owns the jobs for memory management purposes,. and this will handle that for you.

Target is Movie Pipeline Queue

## 图示

![]($-20221218-20094026.png)

## Inputs

In: Exec.

Target: Movie Pipeline Queue Object Reference.

In Job Type: Movie Pipeline Executor Job Class Reference. Specify the specific Job type that should be created. Custom Executors can use custom Job types to allow the user to provide more information..  

## Outputs

Out: Exec.

Return Value: Movie Pipeline Executor Job Object Reference. The created Executor job instance..

