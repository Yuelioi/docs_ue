# ClientStartCameraShake

播放相机抖动

目标是玩家控制器

## 图示

![]($-20221218-19054270.png)

## Inputs

在。执行。

目标。玩家控制器对象参考。

抖动。相机抖动基类参考。播放相机摇动的动画。

规模。Float（单精度）。定义播放动画的 "强度 "的标量。

播放空间。ECameraShakePlaySpace枚举。在哪个坐标系中播放抖动（用于抖动中的CameraAnims）。

用户播放空间旋转。旋转器。当PlaySpace = CAPS_UserDefined时使用的矩阵。  

## Outputs

出：执行。
