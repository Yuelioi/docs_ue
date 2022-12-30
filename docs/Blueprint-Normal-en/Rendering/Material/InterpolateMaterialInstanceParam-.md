# InterpolateMaterialInstanceParam-

Interpolates the scalar and vector parameters of this material instance based on two other material instances, and an alpha blending factor. The output is the object itself (this).. Supports the case SourceA==this || SourceB==this. Both material have to be from the same base material

Target is Material Instance Dynamic

## 图示

![]($-20221218-20380315.png)

## Inputs

In: Exec.

Target: Material Instance Dynamic Object Reference.

Source A: Material Instance Object Reference. value that is used for Alpha=0, silently ignores the case if 0.

Source B: Material Instance Object Reference. value that is used for Alpha=1, silently ignores the case if 0.

Alpha: Float (single-precision). usually in the range 0..1, values outside the range extrapolate.  

## Outputs

Out: Exec.

