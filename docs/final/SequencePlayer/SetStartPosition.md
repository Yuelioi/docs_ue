# SetStartPosition

设置序列播放器的起始位置。如果这是从 "成为相关 "或 "初始更新 "中调用的，那么它应该伴随着对.SetAccumulatedTime，以达到重设序列播放器的播放时间的预期效果。

目标是序列播放器库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482011.png)

## Inputs

在。执行。

序列播放器。序列播放器参考结构（通过参考）。

起始位置。Float（单精度）。

## Outputs

出：执行。

返回值。序列播放器参考结构。设置序列播放器的起始位置。如果这是从成为相关或初始更新时调用的，那么它应该伴随着调用.SetAccumulatedTime 以达到重设序列播放器的播放时间的预期效果。

<hr>

Set the start position of the sequence player.. If this is called from On Become Relevant or On Initial Update then it should be accompanied by a call to. SetAccumulatedTime to achieve the desired effect of resetting the play time of a sequence player.

Target is Sequence Player Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20482011.png)

## Inputs

In: Exec.

Sequence Player: Sequence Player Reference Structure (by ref).

Start Position: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Sequence Player Reference Structure. Set the start position of the sequence player.. If this is called from On Become Relevant or On Initial Update then it should be accompanied by a call to. SetAccumulatedTime to achieve the desired effect of resetting the play time of a sequence player..
