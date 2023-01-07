# GetARCandidateObject

保存以指定位置为中心的点云，捕捉指定范围内的所有特征，作为以后可以检测的对象。

目标是 ARGet Candidate Object Async Task Blueprint Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-18092658.png)

## Inputs

在。执行。

位置。向量。要抓取特征的范围的中心。

Extent（范围）。Vector：向量，要抓取特征点的区域大小。

## Outputs

Out：输出。执行：执行。

成功时。Exec. 在成功时。

失败时。执行。失败时。

保存的对象。ARCandidate Object Object Reference.

<hr>

Saves the point cloud centered at the specified location capturing all of the features within the specified extent as an object that can be detected later

Target is ARGet Candidate Object Async Task Blueprint Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-18092658.png)

## Inputs

In: Exec.

Location: Vector. the center of the extent to grab features at.

Extent: Vector. the size of the region to grab feature points.

## Outputs

Out: Exec.

On Success: Exec. On Success.

On Failed: Exec. On Failed.

Saved Object: ARCandidate Object Object Reference.
