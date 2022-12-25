# OnMoviePipelineWorkFinishedDeleg-

On Movie Pipeline Work Finished Delegate:.当我们完全完成这个管道时被调用。这意味着所有的帧都已经渲染完毕，所有的文件都已经写入磁盘，任何最后的输出也已经完成。此管道将在调用。Shutdown()，以确保我们已经从所有委托中取消注册，并且不再试图做任何事情（即使我们仍然存在）。

返回中的params结构将有关于每次拍摄的文件写入磁盘的元数据。
