# SetStartPosition

Set the start position of the sequence player.. If this is called from On Become Relevant or On Initial Update then it should be accompanied by a call to. SetAccumulatedTime to achieve the desired effect of resetting the play time of a sequence player.

Target is Sequence Player Library

## 图示

![]($-20221218-20482011.png)

## Inputs

In: Exec.

Sequence Player: Sequence Player Reference Structure (by ref).

Start Position: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Sequence Player Reference Structure. Set the start position of the sequence player.. If this is called from On Become Relevant or On Initial Update then it should be accompanied by a call to. SetAccumulatedTime to achieve the desired effect of resetting the play time of a sequence player..

