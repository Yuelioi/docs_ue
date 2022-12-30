# DuplicateJob

Duplicate the specific job and return the duplicate. Configurations are duplicated and not shared.

Target is Movie Pipeline Queue

## 图示

![]($-20221218-20094374.png)

## Inputs

In: Exec.

Target: Movie Pipeline Queue Object Reference.

In Job: Movie Pipeline Executor Job Object Reference. The job to look for to duplicate..  

## Outputs

Out: Exec.

Return Value: Movie Pipeline Executor Job Object Reference. The duplicated instance or nullptr if a duplicate could not be made..

