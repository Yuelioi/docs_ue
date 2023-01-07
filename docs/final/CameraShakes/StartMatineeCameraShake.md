# StartMatineeCameraShake

向后兼容的方法，由核心 BP 重定向器使用。这一点是需要的，因为返回值是特别的 Matinee 相机抖动，.一些 BP 逻辑经常直接使用它来设置振荡器/动画属性。

目标是 Matinee 相机抖动

## 图示

![](/uploads/projects/ue-bluprint/20221218-18142593.png)

## Inputs

在。执行。

播放器摄像机管理器。播放器摄像机管理器对象参考。

Shake Class: Matinee Camera Shake Class Reference.

尺度。Float（单精度）。

播放空间。ECameraShakePlaySpace 枚举。

用户播放空间旋转。旋转器。

## Outputs

输出：输出。执行：执行。

返回值。Matinee Camera Shake 对象参考。由核心 BP 重定向器使用的向后兼容的方法。这是有必要的，因为返回值是特别的 Matinee 相机抖动，一些 BP 逻辑经常直接使用它来设置振荡器/动画属性。

<hr>

Backwards compatible method used by core BP redirectors. This is needed because the return value is specifically a Matinee camera shake,. which some BP logic often uses directly to set oscillator/anim properties.

Target is Matinee Camera Shake

## 图示

![](/uploads/projects/ue-bluprint/20221218-18142593.png)

## Inputs

In: Exec.

Player Camera Manager: Player Camera Manager Object Reference.

Shake Class: Matinee Camera Shake Class Reference.

Scale: Float (single-precision).

Play Space: ECameraShakePlaySpace Enum.

User Play Space Rot: Rotator.

## Outputs

Out: Exec.

Return Value: Matinee Camera Shake Object Reference. Backwards compatible method used by core BP redirectors. This is needed because the return value is specifically a Matinee camera shake,. which some BP logic often uses directly to set oscillator/anim properties..
