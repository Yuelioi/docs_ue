# Normalize_Quat

Normalize this quaternion if it is large enough as compared to the supplied tolerance.. If it is too small then set it to the identity quaternion.

Target is Kismet Math Library

## 图示

![]($-20221218-19530595.png)

## Inputs

In: Exec.

Q: Quat Structure (by ref).

Tolerance: Float (single-precision). Minimum squared length of quaternion for normalization..  

## Outputs

Out: Exec.

