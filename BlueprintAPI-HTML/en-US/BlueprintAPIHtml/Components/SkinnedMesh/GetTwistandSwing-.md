# GetTwistandSwing-

Get Twist and Swing Angle in Degree of Delta Rotation from Reference Pose in Local space

First this function gets rotation of current, and rotation of ref pose in local space, and. And gets twist/swing angle value from refpose aligned.

Target is Skinned Mesh Component

## 图示

![]($-20221218-18265197.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of the bone.  

## Outputs

Out Twist Angle: Float (single-precision). TwistAngle in degree.

Out Swing Angle: Float (single-precision). SwingAngle in degree.

Return Value: Boolean. true if succeed. False otherwise. Often due to incorrect bone name..

