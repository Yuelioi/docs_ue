# AddCustomChannel

创建一个新的文本到语音通道，其中文本到语音请求由用户实现的C++文本到语音类来完成。如果你没有指定要使用的自定义文本到语音类，请使用AddDefaultChannel代替。如果通道标识不是唯一的，或者如果用户没有指定一个自定义的文本到语音类用于ITextToSpeechModule，这将不会添加一个通道。新添加的通道必须被激活以使用文本到语音的功能。见。ITextToSpeechModule, AddDefaultChannel, ActivateChannel, ActivateAllChannels

目标是文字转语音引擎子系统

## 图示

![]($-20221218-21112704.png)

## Inputs

在。执行。

目标。文本到语音引擎子系统对象参考。

新的频道标识。名称。  

## Outputs

出：执行。
