# OpenFile

打开指定的媒体文件路径。

返回值为 "true "表示播放器将尝试打开媒体，但以后可能会因为其他原因而失败，比如说，如果与媒体服务器的连接超时了。使用OnMediaOpened和。OnMediaOpenFailed代表来检测媒体是否和何时准备好了！。

目标是媒体播放器

## 图示

![]($-20221218-20012346.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

文件路径。字符串。要打开的文件路径。  

## Outputs

出：执行。

返回值。布尔值。如果文件路径将被打开，则为真，否则为假。

Opens the specified media file path.

A return value of true indicates that the player will attempt to open. the media, but it may fail to do so later for other reasons, i.e. if. a connection to the media server timed out. Use the OnMediaOpened and. OnMediaOpenFailed delegates to detect if and when the media is ready!

Target is Media Player

## 图示

![]($-20221218-20012346.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

File Path: String. The file path to open..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the file path will be opened, false otherwise..

