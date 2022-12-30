# SetInitializationTime

Override the time this movie pipeline was initialized at. This can be used for render farms. to ensure that jobs on all machines use the same date/time instead of each calculating it locally.

Needs to be called after ::Initialize(...)

Target is Movie Pipeline

## 图示

![]($-20221218-20095995.png)

## Inputs

In: Exec.

Target: Movie Pipeline Object Reference.

In Date Time: Date Time Structure (by ref). The DateTime object to return for GetInitializationTime..  

## Outputs

Out: Exec.

