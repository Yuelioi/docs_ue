# Shutdown

Abandons any future work on this Movie Pipeline and runs through the shutdown flow to ensure already. completed work is written to disk. This is a blocking-operation and will not return until all outstanding. work has been completed.

Target is Movie Pipeline

## 图示

![]($-20221218-20101053.png)

## Inputs

In: Exec.

Target: Movie Pipeline Object Reference.

Error: Boolean. Whether this is an early shut down due to an error This function should only be called from the game thread..  

## Outputs

Out: Exec.

