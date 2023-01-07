# GetTwistandSwing-

从本地空间的参考姿势中获取三角旋转度的扭转和摆动角度

首先，这个函数得到当前的旋转，以及参考姿势在本地空间的旋转，并且。并从参考姿势中获取对齐的扭转/摆动角度值。

目标是带皮的网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18265197.png)

## Inputs

目标。剥皮的网状构件对象参考。

骨骼名称。名称。骨头的名称。

## Outputs

Out Twist Angle（扭曲角度）。Float（单精度）。扭转角度，度数。

输出摆动角度。Float（单精度）。摆动角度，度数。

返回值。布尔值。如果成功，为 true。否则为假。通常是由于骨骼名称不正确。

<hr>

Get Twist and Swing Angle in Degree of Delta Rotation from Reference Pose in Local space

First this function gets rotation of current, and rotation of ref pose in local space, and. And gets twist/swing angle value from refpose aligned.

Target is Skinned Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18265197.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of the bone.

## Outputs

Out Twist Angle: Float (single-precision). TwistAngle in degree.

Out Swing Angle: Float (single-precision). SwingAngle in degree.

Return Value: Boolean. true if succeed. False otherwise. Often due to incorrect bone name..
