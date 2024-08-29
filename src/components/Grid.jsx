const Grid = () => (
  <div className="w-screen grid grid-cols-5 md:grid-cols-9 gap-2 p-2 lg:gap-5 lg:p-8">
    {Array.from({ length: 45 }).map((_, index) => {
      return <div key={index} className={`aspect-square odd:bg-[var(--primary)] rounded-sm border-2 border-[var(--accent)] even:hover:bg-[var(--accent)] odd:hover:bg-transparent transition-all duration-700 ease-in-out delay-700 hover:delay-0`}/>
    })}
  </div>
)

export default Grid;
