'use client'

interface PreProps {
    loading: boolean
}

/**
 * 简单的预加载遮罩组件。
 * props.loading = true 时显示 id="preloader"，
 * 否则显示 id="preloader-none"。
 */
export default function Pre({ loading }: PreProps) {
    return (
        <div id={loading ? 'preloader' : 'preloader-none'} />
    )
}
