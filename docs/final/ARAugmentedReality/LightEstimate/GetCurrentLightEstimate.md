# GetCurrentLightEstimate

一个 AugmentedReality 会话可以被配置为提供光线估计。光照估计的具体方法可以通过在 StartARSession()中指定的 UARSessionConfig 来配置。这个函数假定你将把返回的 UARLightEstimate 投到一个与你的会话配置相对应的派生类型。

目标是 ARBlueprint 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17565997.png)

## Inputs

## Outputs

返回值。ARLight Estimate Object Reference。一个可以被投到派生类的 UARLighEstimate。

<hr>

An AugmentedReality session can be configured to provide light estimates.. The specific approach to light estimation can be configured by the \c UARSessionConfig. specified during \c StartARSession(). This function assumes that you will cast. the returned \c UARLightEstimate to a derived type corresponding to your. session config.

Target is ARBlueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17565997.png)

## Inputs

## Outputs

Return Value: ARLight Estimate Object Reference. a \c UARLighEstimate that can be cast to a derived class..
