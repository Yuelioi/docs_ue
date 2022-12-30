# TwoBoneIKFunction

Computes the transform for two bones using inverse kinematics.

Target is Kismet Animation Library

## 图示

![]($-20221218-12165711.png)

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

