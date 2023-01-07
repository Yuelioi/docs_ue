# GetStatusMessage

获取这个镜头的当前状态信息。可能是一个空字符串。

对于 C++的实现，覆盖虚拟 FString GetStatusMessage_Implementation() 覆盖 对于 Python/BP 的实现，覆盖。@unreal.ufunction(override=True). def get_status_message(self):. return ?

目标是电影管道执行者的镜头

## 图示

![](/uploads/projects/ue-bluprint/20221218-20091395.png)

## Inputs

目标。电影管道执行者拍摄对象参考。

## Outputs

返回值。字符串。获取该镜头的当前状态信息。可能是一个空字符串。对于 C++的实现，覆盖虚拟 FString GetStatusMessage_Implementation() 覆盖 对于 Python/BP 的实现，覆盖。@unreal.ufunction(override=True). def get_status_message(self):. return ?

<hr>

Get the current status message for this shot. May be an empty string.

For C++ implementations override virtual FString GetStatusMessage_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_message(self):. return ?

Target is Movie Pipeline Executor Shot

## 图示

![](/uploads/projects/ue-bluprint/20221218-20091395.png)

## Inputs

Target: Movie Pipeline Executor Shot Object Reference.

## Outputs

Return Value: String. Get the current status message for this shot. May be an empty string.: For C++ implementations override virtual FString GetStatusMessage_Implementation() override For Python/BP implementations override. @unreal.ufunction(override=True). def get_status_message(self):. return ?.
