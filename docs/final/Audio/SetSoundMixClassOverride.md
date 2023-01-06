# SetSoundMixClassOverride

覆盖给定声音混合中的声音类别调整器。如果输入的混音中不存在声音类别，那么声音类别调整器将被添加到活动混音修改器列表中。

目标是游戏静力学

## 图示

![]($-20221218-18075197.png)

## Inputs

在。执行。

在声音混合修改器中。声音混合对象参考。要修改的声音组合。

在Sound Class中。声音类对象参考。在混合声中覆盖（或添加）的声音类。

音量。Float（单精度）。设置声音类调整器的音量比例。

音高。Float（单精度）。设置声音等级调节器的音阶。

淡入时间。浮点（单精度）。从当前的声类调整器值到新值的插值时间。

应用于儿童。布尔值。是否将此覆盖应用于声音类的子代，或只应用于指定的声音类。 

## Outputs

输出。执行。

Overrides the sound class adjuster in the given sound mix. If the sound class does not exist in the input sound mix,. the sound class adjuster will be added to the list of active sound mix modifiers.

Target is Gameplay Statics

## 图示

![]($-20221218-18075197.png)

## Inputs

In: Exec.

In Sound Mix Modifier: Sound Mix Object Reference. The sound mix to modify..

In Sound Class: Sound Class Object Reference. The sound class to override (or add) in the sound mix..

Volume: Float (single-precision). The volume scale to set the sound class adjuster to..

Pitch: Float (single-precision). The pitch scale to set the sound class adjuster to..

Fade in Time: Float (single-precision). The interpolation time to use to go from the current sound class adjuster values to the new values..

Apply to Children: Boolean. Whether or not to apply this override to the sound class' children or to just the specified sound class..  

## Outputs

Out: Exec.

