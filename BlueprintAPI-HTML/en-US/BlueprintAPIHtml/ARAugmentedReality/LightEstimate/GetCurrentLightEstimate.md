# GetCurrentLightEstimate

An AugmentedReality session can be configured to provide light estimates.. The specific approach to light estimation can be configured by the \c UARSessionConfig. specified during \c StartARSession(). This function assumes that you will cast. the returned \c UARLightEstimate to a derived type corresponding to your. session config.

Target is ARBlueprint Library

## 图示

![]($-20221218-17565997.png)

## Inputs

## Outputs

Return Value: ARLight Estimate Object Reference. a \c UARLighEstimate that can be cast to a derived class..

