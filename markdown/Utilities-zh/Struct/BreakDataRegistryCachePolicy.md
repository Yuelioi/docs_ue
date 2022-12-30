# BreakDataRegistryCachePolicy

添加一个节点，将'DataRegistryCachePolicy'分解到其成员字段中

## 图示

![]($-20221218-14333544.png)

## Inputs

数据注册表缓存策略。数据注册表缓存策略结构（通过引用）。 

## Outputs

Cache Is Always Volatile: 布尔值。Cache Is Always Volatile:. 如果这是真的，在返回EDataRegistryCacheResult时，缓存总是被认为是不稳定的。

Use Curve Table Cache Version: 布尔值。Use Curve Table Cache Version:.使用曲线表缓存版本 如果为true，缓存版本与全局CurveTable缓存版本同步。

Min Number Kept: 整数。最小保留数量：。如果加载的项目少于这个数字，将不会释放，0表示无限。

最大保存数量。整数。最大保存数量：。保持加载的物品的最大数量，0表示无限。

强制保持秒数。浮点数（单精度）。强制保持秒数：。任何在此秒数内访问的项目都不会被卸载。

强制释放秒数。浮点数（单精度）。强制释放秒数:。任何在此秒数内未被访问的项目总是被卸载。
