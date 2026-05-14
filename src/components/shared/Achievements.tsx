const achievements = [
  { head: '+15', label: 'Years Experience' },
  { head: '20+', label: 'Expert Technicians' },
  { head: '1,200+', label: 'Projects Completed' },
  { head: '100%', label: 'Satisfaction Rate' },
]
export default function Achievements() {
  return (
    <>
      <div className="bg-secondary text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10">
          <div className="flex w-full max-w-[1110px] flex-row flex-wrap justify-center gap-0 md:gap-4 md:flex-nowrap">
            {achievements.map((item, i) => (
              <div
                key={item.label}
                className={`flex min-w-[calc(50%-0px)] md:min-w-0 flex-1 flex-col items-center py-2 px-2 text-center ${
                  i === 0
                    ? 'border-r border-b md:border-r-0 md:border-b-0'
                    : i === 1
                      ? 'border-b md:border-b-0'
                      : i === 2
                        ? 'border-r md:border-r-0'
                        : 'md:border-b-0'
                } border-white/50 ${i > 0 ? 'md:border-l md:pl-4' : ''}`}
              >
                <span className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
                  {item.head}
                </span>
                <span className="text-lg font-medium  text-white/50">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
