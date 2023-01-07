# PlayDynamicForceFeedback

控制力反馈的播放的潜伏动作。在调用 Start 时开始播放。如果反馈没有激活，调用 Update 或 Stop 将没有任何效果。当调用 "停止 "或持续时间结束时，"完成 "将执行。当调用 "更新 "时，强度、持续时间和影响值将根据当前的输入进行更新。

目标是玩家控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19054852.png)

## Inputs

开始：执行。

更新：行政长官。

停止：执行。

目标。玩家控制器对象参考。

强度。浮点数（单精度）。反馈应该有多强。有效值在 0.0 和 1.0 之间。

持续时间。Float（单精度）。反馈应该播放多长时间。如果该值为负数，就会播放到停止。

影响左大。布尔值。强度是否应该应用于左大舵机。

影响左小：布尔值。强度是否应该应用于左小舵机。

影响右大。布尔值。强度是否应该应用于右大舵机。

影响右小：布尔值。强度是否应该应用于右小舵机。

## Outputs

已完成。执行。

<hr>

Latent action that controls the playing of force feedback. Begins playing when Start is called. Calling Update or Stop if the feedback is not active will have no effect.. Completed will execute when Stop is called or the duration ends.. When Update is called the Intensity, Duration, and affect values will be updated with the current inputs

Target is Player Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-19054852.png)

## Inputs

Start: Exec.

Update: Exec.

Stop: Exec.

Target: Player Controller Object Reference.

Intensity: Float (single-precision). How strong the feedback should be. Valid values are between 0.0 and 1.0.

Duration: Float (single-precision). How long the feedback should play for. If the value is negative it will play until stopped.

Affects Left Large: Boolean. Whether the intensity should be applied to the large left servo.

Affects Left Small: Boolean. Whether the intensity should be applied to the small left servo.

Affects Right Large: Boolean. Whether the intensity should be applied to the large right servo.

Affects Right Small: Boolean. Whether the intensity should be applied to the small right servo.

## Outputs

Completed: Exec.
