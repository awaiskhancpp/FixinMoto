import { Clock, User } from 'lucide-react'
const RECENTPOSTS = [
  {
    title: "The Ultimate Guide to Maintaining Your Car's Engine",
    date: 'Dec 9, 2026',
    author: 'Alex Johnson',
  },
  {
    title: '2024 Toyota Camry Review: The Perfect Blend of Comfort and Performance',
    date: 'Dec 29, 2026',
    author: 'Alex Johnson',
  },
  {
    title: 'How to Choose the Best Car for Your Family: Tips and Recommendations',
    date: 'Dec 26, 2026',
    author: 'Alex Johnson',
  },
  {
    title: 'The Future of Driving: Understanding Autonomous Vehicles',
    date: 'Dec 9, 2026',
    author: 'Alex Johnson',
  },
]

export default function RecentPosts() {
  return (
    <div className="text-white bg-primary rounded-lg px-[15px] pb-4">
      <h2 className="text-white font-semibold mt-3 pt-6">Recent Post</h2>

      <div className="mt-3 w-full xl:w-[80%] space-y-6 ">
        {RECENTPOSTS.map((p, i) => (
          <Post key={i} title={p.title} author={p.author} date={p.date} />
        ))}
      </div>
    </div>
  )
}
interface POST {
  title: string
  date: string
  author: string
}
function Post({ title, date, author }: POST) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium leading-[1.444] lg:line-clamp-2 xl:line-clamp-3 mt-3 ">
        {title}
      </h3>
      <div className="flex lg:flex-row md:flex-col flex-row gap-6 md:gap-2 opacity-50 mt-2">
        <div className="flex gap-2 lg:w-32">
          <Clock className="size-4 " />
          <time className="text-xs font-normal">{date}</time>
        </div>
        <div className="flex gap-2 w-32">
          <User className="size-4 " />
          <span className="text-xs font-normal ">{author}</span>
        </div>
      </div>
    </div>
  )
}
