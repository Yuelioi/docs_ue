# TwoBoneIKFunction

使用逆运动学计算两根骨头的变换。

目标是 Kismet 动画库

## 图示

![](/uploads/projects/ue-bluprint/20221218-12165711.png)

## Inputs

根部位置。矢量（通过引用）。两个骨链的输入根部位置。

联合位置。矢量（通过参考）。两个骨链的输入中心（肘部）位置。

结束位置。矢量（通过参考）。两个骨链的输入端（手腕）位置。

联合目标。向量（通过参考）。写作要达到的 IK 目标。

效应器。向量（通过参考）。IK 链的目标效应器的位置。

允许伸展：布尔值。如果设置为 "真"，则允许骨骼伸展。

开始拉伸率。Float（单精度）。骨头应该开始拉伸的比率。该值越高，拉伸就会越晚开始。

最大拉伸比例。Float（单精度）。拉伸的最大倍数，以达到。

## Outputs

出关节位置。矢量。中心（肘部）的结果位置。

出端位置。矢量。终端（手腕）的结果位置。

<hr>

Computes the transform for two bones using inverse kinematics.

Target is Kismet Animation Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-12165711.png)

## Inputs

Root Pos: Vector (by ref). The input root position of the two bone chain.

Joint Pos: Vector (by ref). The input center (elbow) position of the two bone chain.

End Pos: Vector (by ref). The input end (wrist) position of the two bone chain.

Joint Target: Vector (by ref). The IK target for the write to reach.

Effector: Vector (by ref). The position of the target effector for the IK Chain..

Allow Stretching: Boolean. If set to true the bones are allowed to stretch.

Start Stretch Ratio: Float (single-precision). The ratio at which the bones should start to stretch. The higher the value, the later the stretching wil start..

Max Stretch Scale: Float (single-precision). The maximum multiplier for the stretch to reach..

## Outputs

Out Joint Pos: Vector. The resulting position for the center (elbow).

Out End Pos: Vector. The resulting position for the end (wrist).
