# BreakTextureShareBPTimeOut

添加一个节点，将'TextureShareBPTimeOut'分解成其成员字段

## 图示

![]($-20221218-14443213.png)

## Inputs

纹理共享BPTime Out。纹理共享BPTime Out结构（通过参考）。  

## Outputs

连接同步。Float (single-precision).连接同步：。等待进程共享连接（ETextureShareBPSyncConnect::Sync）[秒，零表示无限]。

帧同步。Float (single-precision).帧同步：。等待帧索引同步（ETextureShareBPSyncFrame::Sync）[Seconds, zero for infinite]。

纹理配对同步。Float (single-precision).Texture Pairing Sync:.等待远程进程纹理注册（ETextureShareBPSyncSurface::SyncPairingRead）[Seconds, zero for infinite]。

纹理资源同步。Float (single-precision).纹理资源同步：。等待远程资源（GPU）句柄准备就绪（ETextureShareBPSyncFrame::Sync）[Seconds, zero for infinite]。

纹理同步。Float (single-precision).Texture Sync:.Read op texture前的等待，直到远程进程完成纹理写入操作[Seconds, zero for infinite]。