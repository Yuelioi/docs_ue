# OpenSource

Open the specified media source.

A return value of true indicates that the player will attempt to open. the media, but it may fail to do so later for other reasons, i.e. if. a connection to the media server timed out. Use the OnMediaOpened and. OnMediaOpenFailed delegates to detect if and when the media is ready!

Target is Media Player

## 图示

![]($-20221218-20012692.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Media Source: Media Source Object Reference. The media source to open..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the source will be opened, false otherwise..

