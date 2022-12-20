# CopyMaterialInstanceParameters

Copies over parameters given a material interface (copy each instance following the hierarchy). Very slow implementation, avoid using at runtime. Hopefully we can replace it later with something like CopyInterpParameters(). The output is the object itself (this). Copying 'quick parameters only' will result in a much. faster copy process but will only copy dynamic scalar, vector and texture parameters on clients.

Target is Material Instance Dynamic

## 图示

![]($-20221218-20373257.png)

## Inputs

In: Exec.

Target: Material Instance Dynamic Object Reference.

Source: Material Interface Object Reference.

Quick Parameters Only: Boolean. Copy scalar, vector and texture parameters only. Much faster but may not include required data.  

## Outputs

Out: Exec.

