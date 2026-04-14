import CircularProgress from "./CircularProgress";

function TimerContainer() {
  return (
    <div className="h-75 aspect-square p-4 rounded-full bg-linear-275 from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_#272C5A,50px_50px_100px_#121530]">
      <div className="relative w-full h-full p-2.5 bg-blue-900 rounded-full flex items-center justify-center">
        <CircularProgress />

        <div className="text-blue-100 text-center flex flex-col items-center">
          <h2 className="text-[80px] leading-base font-bold tracking-[-5px]">17:59</h2>
          <button type="button" className="translate-x-[7.5px] text-[14px] leading-[120%] tracking-[13px] font-bold uppercase">Pause</button>
        </div>
      </div>
    </div>
  )
}

export default TimerContainer;