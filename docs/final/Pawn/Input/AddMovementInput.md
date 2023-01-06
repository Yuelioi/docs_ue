# AddMovementInput

沿着给定的世界方向矢量（通常是归一化的），按'ScaleValue'的比例添加运动输入。如果ScaleValue<0，运动将朝相反方向进行。基本的小兵类不会自动应用移动，而是由用户在Tick事件中来做。子类，如Character和DefaultPawn会自动处理这个输入和移动。

目标是卒子

## 图示

![]($-20221218-20191441.png)

## Inputs

在。执行。

目标。卒子对象参考。

世界方向。矢量。世界空间中应用输入的方向。

刻度值。Float（单精度）。应用于输入的比例。这可用于模拟输入，即0.5的值适用于正常值的一半，而-1.0将扭转方向。

力量。布尔值。如果为真，总是添加输入，忽略IsMoveInputIgnored（）的结果。  

## Outputs

出：执行。

Add movement input along the given world direction vector (usually normalized) scaled by 'ScaleValue'. If ScaleValue < 0, movement will be in the opposite direction.. Base Pawn classes won't automatically apply movement, it's up to the user to do so in a Tick event. Subclasses such as Character and DefaultPawn automatically handle this input and move.

Target is Pawn

## 图示

![]($-20221218-20191441.png)

## Inputs

In: Exec.

Target: Pawn Object Reference.

World Direction: Vector. Direction in world space to apply input.

Scale Value: Float (single-precision). Scale to apply to input. This can be used for analog input, ie a value of 0.5 applies half the normal value, while -1.0 would reverse the direction..

Force: Boolean. If true always add the input, ignoring the result of IsMoveInputIgnored()..  

## Outputs

Out: Exec.

