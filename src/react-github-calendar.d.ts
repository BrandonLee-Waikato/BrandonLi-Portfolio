// 声明 react-github-calendar 模块，允许运行时引入
declare module 'react-github-calendar' {
    import * as React from 'react'
    export interface ReactGithubCalendarProps {
        username: string
        blockSize?: number
        blockMargin?: number
        fontSize?: number
        color?: string
    }
    const GitHubCalendar: React.FC<ReactGithubCalendarProps>
    export default GitHubCalendar
}
