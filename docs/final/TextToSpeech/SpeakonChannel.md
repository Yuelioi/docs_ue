# SpeakonChannel

立即在所请求的文本到语音通道上异步地发出所请求的字符串，中断已经在该通道上发出的任何字符串。如果提供的通道 ID 不存在，将不会发出任何声音。在执行这个函数之前，必须添加和激活一个文本到语音通道。要创建一个平台默认的文本到语音通道，请使用 AddDefaultChannel。要用用户实现的 C++文本到语音类创建一个自定义文本到语音通道，请使用 AddCustomChannel.这个函数不打算用于跨越多个句子或段落的长字符串。

目标是文字转语音引擎子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21114654.png)

## Inputs

在。执行。

目标。文本到语音引擎子系统对象参考。

频道标识。名称。要发言的频道的 ID。

弦子说话。字符串（通过引用）。要在请求的通道上说话的字符串。参见。AddDefaultChannel, AddCustomChannel, ActivateChannel, ActivateAllChannels。

## Outputs

出：执行。

<hr>

Immediately vocalizes the requested string asynchronously on the requested text to speech channel, interrupting any string that is already being vocalized on the channel.. If the provided channel Id does not exist, nothing will be vocalized.. Before executing this function, a text to speech channel must be added and activated.. To create a platform default text to speech channel, use AddDefaultChannel.. To create a custom text to speech channel with a user-implemented C++ text to speech class, use AddCustomChannel.. This function is not intended for long strings that span multiple sentences or paragraphs.

Target is Text to Speech Engine Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21114654.png)

## Inputs

In: Exec.

Target: Text To Speech Engine Subsystem Object Reference.

Channel Id: Name. The Id of the channel to speak on..

String to Speak: String (by ref). The string to speak on the requested channel. See: AddDefaultChannel, AddCustomChannel, ActivateChannel, ActivateAllChannels.

## Outputs

Out: Exec.
