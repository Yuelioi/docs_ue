# MakeTextureShareBPSyncPolicy

Adds a node that create a 'TextureShareBPSyncPolicy' from its members

## 图示

![]($-20221218-15031474.png)

## Inputs

Connection: ETextureShareBPSyncConnect Enum. Connection:. Synchronize Session state events (BeginSession/EndSession).

Frame: ETextureShareBPSyncFrame Enum. Frame:. Synchronize frame events (BeginFrame/EndFrame).

Texture: ETextureShareBPSyncSurface Enum. Texture:. Synchronize texture events (LockTexture/UnlockTexture).  

## Outputs

Texture Share BPSync Policy: Texture Share BPSync Policy Structure.

