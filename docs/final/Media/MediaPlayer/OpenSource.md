# OpenSource

打开指定的媒体源。

返回值为 "true "表示播放器将尝试打开媒体，但以后可能会因为其他原因而失败，比如说，如果与媒体服务器的连接超时了。使用 OnMediaOpened 和。OnMediaOpenFailed 代表来检测媒体是否和何时准备好了！。

目标是媒体播放器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20012692.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

媒体来源。媒体源对象参考。要打开的媒体源...

## Outputs

出：执行。

返回值。布尔值。如果源将被打开，则为 true，否则为 false。

<hr>

Open the specified media source.

A return value of true indicates that the player will attempt to open. the media, but it may fail to do so later for other reasons, i.e. if. a connection to the media server timed out. Use the OnMediaOpened and. OnMediaOpenFailed delegates to detect if and when the media is ready!

Target is Media Player

## 图示

![](/uploads/projects/ue-bluprint/20221218-20012692.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Media Source: Media Source Object Reference. The media source to open..

## Outputs

Out: Exec.

Return Value: Boolean. true if the source will be opened, false otherwise..
