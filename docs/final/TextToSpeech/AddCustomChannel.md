# AddCustomChannel

创建一个新的文本到语音通道，其中文本到语音请求由用户实现的 C++文本到语音类来完成。如果你没有指定要使用的自定义文本到语音类，请使用 AddDefaultChannel 代替。如果通道标识不是唯一的，或者如果用户没有指定一个自定义的文本到语音类用于 ITextToSpeechModule，这将不会添加一个通道。新添加的通道必须被激活以使用文本到语音的功能。见。ITextToSpeechModule, AddDefaultChannel, ActivateChannel, ActivateAllChannels

目标是文字转语音引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21112704.png)

## Inputs

在。执行。

目标。文本到语音引擎子系统对象参考。

新的频道标识。名称。

## Outputs

出：执行。

<hr>

Creates a new text to speech channel where text to speech requests are fulfilled by a user implemented C++ text to speech class.. If you have not specified a custom text to speech class to be used, use AddDefaultChannel instead.. This will not add a channel if the channel Id is not unique or if the user has not specified a custom text to speech class to be used in ITextToSpeechModule.. Newly added channels must be activated to use text to speech functionalities.. See: ITextToSpeechModule, AddDefaultChannel, ActivateChannel, ActivateAllChannels

Target is Text to Speech Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21112704.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

New Channel Id: Name.

## Outputs

Out: Exec.
