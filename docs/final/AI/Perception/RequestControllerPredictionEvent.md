# RequestControllerPredictionEvent

要求感知系统在 PredictionTime 秒内向请求者提供 PredictedActor 的预测位置。位置是根据预测者角色的当前位置和速度来预测的。

目标是 AISense 的预测

## 图示

![](/uploads/projects/ue-bluprint/20221218-17482315.png)

## Inputs

在。执行。

请求者。AIController 对象参考。

预测的行为者。Actor Object Reference.

预测时间。Float (single-precision).

## Outputs

输出。执行：执行。

<hr>

Asks perception system to supply Requestor with PredictedActor's predicted location in PredictionTime seconds. Location is being predicted based on PredicterActor's current location and velocity

Target is AISense Prediction

## 图示

![](/uploads/projects/ue-bluprint/20221218-17482315.png)

## Inputs

In: Exec.

Requestor: AIController Object Reference.

Predicted Actor: Actor Object Reference.

Prediction Time: Float (single-precision).

## Outputs

Out: Exec.
