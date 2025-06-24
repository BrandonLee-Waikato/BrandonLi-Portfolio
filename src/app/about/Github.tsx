import GitHubCalendar from 'react-github-calendar'

export default function Github() {
    return (
        <div className="overflow-x-auto">
            <GitHubCalendar
                username="BrandonLee-Waikato"
                blockSize={15}
                blockMargin={5}
                color="#22c55e"
                fontSize={16}
            />
        </div>
    )
}
