# BreakTextureShareBPTimeOut

Adds a node that breaks a 'TextureShareBPTimeOut' into its member fields

## 图示

![]($-20221218-14443213.png)

## Inputs

Texture Share BPTime Out: Texture Share BPTime Out Structure (by ref).  

## Outputs

Connection Sync: Float (single-precision). Connection Sync:. Wait for processes shares connection (ETextureShareBPSyncConnect::Sync) [Seconds, zero for infinite].

Frame Sync: Float (single-precision). Frame Sync:. Wait for frame index sync (ETextureShareBPSyncFrame::Sync) [Seconds, zero for infinite].

Texture Pairing Sync: Float (single-precision). Texture Pairing Sync:. Wait for remote process texture registering (ETextureShareBPSyncSurface::SyncPairingRead) [Seconds, zero for infinite].

Texture Resource Sync: Float (single-precision). Texture Resource Sync:. Wait for remote resource(GPU) handle ready (ETextureShareBPSyncFrame::Sync) [Seconds, zero for infinite].

Texture Sync: Float (single-precision). Texture Sync:. Wait before Read op texture until remote process finished texture write op [Seconds, zero for infinite].

