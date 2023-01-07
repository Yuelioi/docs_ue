# OnMediaOpenFailed

媒体打开失败时：。当一个媒体源打开失败时被调用的委托。

这个委托只有在 OpenSource / OpenUrl 返回 true，并且媒体后来未能异步打开的情况下才会被执行。它不会被执行，如果。OpenSource / OpenUrl 返回 false，表示立即失败。

@see OnMediaOpened

<hr>

On Media Open Failed:. A delegate that is invoked when a media source has failed to open.

This delegate is only executed if OpenSource / OpenUrl returned true and. the media failed to open asynchronously later. It is not executed if. OpenSource / OpenUrl returned false, indicating an immediate failure.

@see OnMediaOpened
