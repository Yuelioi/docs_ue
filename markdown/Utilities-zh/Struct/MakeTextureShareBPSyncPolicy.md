# MakeTextureShareBPSyncPolicy

添加一个节点，从其成员中创建一个 "TextureShareBPSyncPolicy"。

## 图示

![]($-20221218-15031474.png)

## Inputs

连接。ETextureShareBPSyncon Enum.连接：。同步会话状态事件（BeginSession/EndSession）。

帧。ETextureShareBPSyncFrame Enum.帧：。同步框架事件（BeginFrame/EndFrame）。

纹理。ETextureShareBPSyncSurface Enum.Texture:.同步纹理事件（LockTexture/UnlockTexture）。  

## Outputs

纹理共享BPSync政策。纹理共享 BPSync政策结构。
