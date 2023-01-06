# DirtyStageActorBlueprint

故意弄脏给定的舞台演员生成的类的ULUeprint。这对测试舞台剧演员在进入PIE时的表现非常有用，因为这通常会在非常敏感的PIE转换时触发重新编译。

目标是SDTests蓝图库

## 图示

![]($-20221218-18113513.png)

## Inputs

在。执行。

蓝图衍生的舞台演员。Usd Stage Actor对象参考。 

## Outputs

输出。Exec.

Intentionally dirties the UBlueprint for the given stage actor's generated class.. This is useful for testing how the stage actor behaves when going into PIE with a dirty blueprint, as that usually triggers. a recompile at the very sensitive PIE transition

Target is SDTests Blueprint Library

## 图示

![]($-20221218-18113513.png)

## Inputs

In: Exec.

Blueprint Derived Stage Actor: Usd Stage Actor Object Reference.  

## Outputs

Out: Exec.

