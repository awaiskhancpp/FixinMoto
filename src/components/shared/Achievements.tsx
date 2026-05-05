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
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center px-6 py-10 md:px-16 md:py-10">
          <div className="flex w-full max-w-[1110px] flex-row flex-wrap justify-center gap-4 md:flex-nowrap md:gap-4">
            {achievements.map((item, i) => (
              <div
                key={item.label}
                className={`flex min-w-[140px] flex-1 flex-col items-center gap-4 py-2 text-center md:min-w-0 ${i > 0 ? 'md:border-l md:border-white md:pl-4' : ''}`}
              >
                <span className="text-4xl font-semibold leading-[1.125] md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.125]">
                  {item.head}
                </span>
                <span className="text-lg font-medium leading-[1.4444444] text-white/50">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
