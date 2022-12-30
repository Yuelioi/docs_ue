# EndTask

Called explicitly to end the task (usually by the task itself). Calls OnDestroy.. Note:: you need to call EndTask before sending out any "on completed" delegates.. If you don't the task will still be in an "active" state while the event receivers may. assume it's already "finished"

Target is Gameplay Task

## 图示

![]($-20221218-19095617.png)

## Inputs

In: Exec.

Target: Gameplay Task Object Reference.  

## Outputs

Out: Exec.

