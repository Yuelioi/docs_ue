# BreakTextureShareBPSyncPolicy

Adds a node that breaks a 'TextureShareBPSyncPolicy' into its member fields

## 图示

![]($-20221218-14442952.png)

## Inputs

Texture Share BPSync Policy: Texture Share BPSync Policy Structure (by ref).  

## Outputs

Connection: ETextureShareBPSyncConnect Enum. Connection:. Synchronize Session state events (BeginSession/EndSession).

Frame: ETextureShareBPSyncFrame Enum. Frame:. Synchronize frame events (BeginFrame/EndFrame).

Texture: ETextureShareBPSyncSurface Enum. Texture:. Synchronize texture events (LockTexture/UnlockTexture).

