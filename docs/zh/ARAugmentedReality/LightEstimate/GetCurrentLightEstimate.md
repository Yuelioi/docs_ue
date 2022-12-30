# GetCurrentLightEstimate

一个AugmentedReality会话可以被配置为提供光线估计。光照估计的具体方法可以通过在StartARSession()中指定的UARSessionConfig来配置。这个函数假定你将把返回的UARLightEstimate投到一个与你的会话配置相对应的派生类型。

目标是ARBlueprint库

## 图示

![]($-20221218-17565997.png)

## Inputs

## Outputs

返回值。ARLight Estimate Object Reference。一个可以被投到派生类的UARLighEstimate。
