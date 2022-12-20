# Exp_Quat

Used in combination with Log().. Assumes a quaternion with W=0 and V=theta*v (where |v| = 1).. Exp(q) = (sin(theta)*v, cos(theta))

Target is Kismet Math Library

## 图示

![]($-20221218-19525305.png)

## Inputs

Q: Quat Structure (by ref).  

## Outputs

Return Value: Quat Structure. Used in combination with Log().. Assumes a quaternion with W=0 and V=theta*v (where |v| = 1).. Exp(q) = (sin(theta)*v, cos(theta)).

