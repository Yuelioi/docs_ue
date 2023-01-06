# InterpolateMaterialInstanceParam-

根据另外两个材质实例和一个alpha混合因子，插值这个材质实例的标量和矢量参数。输出是对象本身（this）。支持SourceA==this || SourceB==this的情况。这两种材料必须来自同一个基础材料。

目标是材料实例动态

## 图示

![]($-20221218-20380315.png)

## Inputs

在。执行。

目标。材料实例动态对象参考。

来源A：材料实例对象参考。Alpha=0时使用的值，如果是0，就会默默地忽略这种情况。

来源B。材料实例对象参考。Alpha=1时使用的值，如果是0，就会默默地忽略这种情况。

阿尔法。浮点数（单精度）。通常在0...1的范围内，超出该范围的数值会被外推。  

## Outputs

出：执行。

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

