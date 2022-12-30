# MakeDataRegistryCachePolicy

添加一个节点，从其成员中创建一个 "DataRegistryCachePolicy"。

## 图示

![]($-20221218-14500153.png)

## Inputs

缓存总是不稳定：布尔值。Cache Is Always Volatile:.如果为真，在返回EDataRegistryCacheResult时，缓存总是被认为是不稳定的。

使用曲线表缓存版本。布尔值。使用曲线表缓存版本：。如果为真，缓存版本与全局CurveTable缓存版本同步。

最少保留的数量。整数。最小保存数量：。如果少于这个数字，将不会释放项目，0表示无限。

保留的最大数量。整数。最大保存数量：。保持加载的项目的最大数量，0表示无限。

强制保持秒数。Float (single-precision).强制保持秒数：。任何在这个秒数内访问的项目都不会被卸载。

力量释放秒数。Float（单精度）。力量释放秒数：。任何在此秒数内未被访问的项目总是被卸载。  

## Outputs

数据注册处缓存政策。数据注册处缓存策略结构。
