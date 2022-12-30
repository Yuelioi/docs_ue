# GetTrackLanguage

获取指定轨道的语言标签。

目标是媒体播放器

## 图示

![]($-20221218-20005437.png)

## Inputs

目标。媒体播放器对象参考。

轨迹类型。EMediaPlayerTrack枚举。轨迹的类型。

轨迹索引。整数。轨迹的索引，如果是选定的，则是INDEX_NONE。  

## Outputs

返回值。字符串。语言标签，即 "en-US "表示英语，或 "und "表示未定义。
