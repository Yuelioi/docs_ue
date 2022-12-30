# AcquireDataRegistryItem_experime-

Starts an asynchronous acquire of a data registry item that may not yet be cached.

Target is Data Registry Subsystem

## 图示

![]($-20221218-18361846.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Acquire Callback: Delegate. Delegate that will be called after acquire succeeds or failed.  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if request was started, false on unrecoverable error.

