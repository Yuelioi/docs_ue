# StartMatineeCameraShakefromSourc-

向后兼容的方法，由核心BP重定向器使用。这一点是需要的，因为返回值是特别的Matinee相机抖动，.一些BP逻辑经常直接使用它来设置振荡器/动画属性。

目标是Matinee相机抖动

## 图示

![]($-20221218-18142720.png)

## Inputs

在。执行。

播放器摄像机管理器。播放器摄像机管理器对象参考。

Shake Class: Matinee Camera Shake Class Reference.

源组件。Camera Shake Source Component（摄像机摇动源组件）对象参考。

刻度。Float（单精度）。

播放空间。ECameraShakePlaySpace枚举。

用户播放空间旋转。旋转器。 

## Outputs

输出：输出。执行：执行。

返回值。Matinee Camera Shake对象参考。由核心BP重定向器使用的向后兼容的方法。这是有必要的，因为返回值是特别的Matinee摄像机抖动，一些BP逻辑经常直接使用它来设置振荡器/动画属性。
