# SpawnActorfromClass

试图用指定的变换生成一个新的演员。

## 图示

![]($-20221218-19074883.png)

## Inputs

在。执行。

类。Actor Class Reference.演员类参考类。你想要构建的对象类。

再生儿变身。变形。用来生成演员的变换。

碰撞处理重写。ESpawnActorCollisionHandlingMethod枚举。指定如何处理产卵点的碰撞。如果未定义，则使用角色类设置。

所有者：行为者对象参考。可以留空；主要用于复制（bNetUseOwnerRelevancy和bOnlyRelevantToOwner），或可见性（PrimitiveComponent的bOwnerNoSee/bOnlyOwnerSee）。  

## Outputs

出：执行。

返回值。Actor对象参考。Actor Object Reference 返回值。构建的对象。
