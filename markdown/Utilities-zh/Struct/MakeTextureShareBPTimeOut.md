# MakeTextureShareBPTimeOut

添加一个节点，从其成员中创建一个 "TextureShareBPTimeOut"。

## 图示

![]($-20221218-15031735.png)

## Inputs

连接同步。Float (single-precision).连接同步：。等待进程共享连接（ETextureShareBPSyncConnect::Sync）[秒，零表示无限]。

帧同步。Float (single-precision).帧同步：。等待帧索引同步（ETextureShareBPSyncFrame::Sync）[秒，零表示无限]。

纹理配对同步。Float (single-precision).Texture Pairing Sync:.等待远程进程纹理注册（ETextureShareBPSyncSurface::SyncPairingRead）[Seconds, zero for infinite]。

纹理资源同步。Float (single-precision).纹理资源同步：。等待远程资源（GPU）句柄准备就绪（ETextureShareBPSyncFrame::Sync）[Seconds, zero for infinite]。

纹理同步。Float (single-precision).Texture Sync:.Read op texture前的等待，直到远程进程完成纹理写入操作[Seconds, zero for infinite]。  

## Outputs

纹理共享 BPTime Out。纹理共享 BPTime Out结构。
