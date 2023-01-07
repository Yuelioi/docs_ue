# SnapFrameTime

将给定的 SourceTime 与指定的 Destination Framerate 中最近的帧相衔接。对于确定另一个分辨率的最近的帧很有用。返回目标帧速率下的帧时间。

目标是时间管理蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-15251161.png)

## Inputs

来源时间。框架时间结构（按参考）。

源率。帧率结构（按参考）。

Snap to Rate:帧率结构（按参考）。

## Outputs

返回值。帧时间结构。将给定的 SourceTime 与指定的 Destination Frameerate 中最近的帧相衔接。对于确定另一个分辨率的最近帧很有用。返回目标帧速率下的帧时间。

<hr>

Snaps the given SourceTime to the nearest frame in the specified Destination Framerate. Useful for determining the nearest frame for another resolution. Returns the frame time in the destination frame rate.

Target is Time Management Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-15251161.png)

## Inputs

Source Time: Frame Time Structure (by ref).

Source Rate: Frame Rate Structure (by ref).

Snap to Rate: Frame Rate Structure (by ref).

## Outputs

Return Value: Frame Time Structure. Snaps the given SourceTime to the nearest frame in the specified Destination Framerate. Useful for determining the nearest frame for another resolution. Returns the frame time in the destination frame rate..
