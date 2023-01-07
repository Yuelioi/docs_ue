# FindCollisionUV

尝试找到碰撞冲击的 UV。请注意，这只在物理设置中启用了 "支持来自撞击结果的 UV "时才有效。

目标是游戏的静力学

## 图示

![](/uploads/projects/ue-bluprint/20221218-18184917.png)

## Inputs

命中：命中结果结构（通过参考）。

UV 通道。整数。

## Outputs

UV：矢量 2D 结构。

返回值。布尔值。尝试找到碰撞冲击的 UV。注意，只有在物理设置中启用了 "支持来自撞击结果的 UV "时，这个方法才有效。

<hr>

Try and find the UV for a collision impact. Note this ONLY works if 'Support UV From Hit Results' is enabled in Physics Settings.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18184917.png)

## Inputs

Hit: Hit Result Structure (by ref).

UVChannel: Integer.

## Outputs

UV: Vector 2D Structure.

Return Value: Boolean. Try and find the UV for a collision impact. Note this ONLY works if 'Support UV From Hit Results' is enabled in Physics Settings..
