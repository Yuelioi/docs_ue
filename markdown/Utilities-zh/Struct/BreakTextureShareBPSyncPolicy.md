# BreakTextureShareBPSyncPolicy

添加一个节点，将'TextureShareBPSyncPolicy'分解到其成员字段中

## 图示

![]($-20221218-14442952.png)

## Inputs

纹理共享BPSync政策。纹理共享BPSync政策结构（按参考）。  

## Outputs

连接。ETextureShareBPSyncon Enum.连接：。同步会话状态事件（BeginSession/EndSession）。

帧。ETextureShareBPSyncFrame Enum.帧：。同步框架事件（BeginFrame/EndFrame）。

纹理。ETextureShareBPSyncSurface Enum.Texture:.同步纹理事件（LockTexture/UnlockTexture）。
