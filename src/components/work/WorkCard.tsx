import { useRef } from "react";

type HoverVideoCardProps = {
  src: string;
  title: string;
  desc: string;
  status?: string;
  poster?: string;
  className?: string;
  txtColor?: string;
  resetOnLeave?: boolean;
  playFromStartOnEnter?: boolean;
  ariaHidden?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function WorkCard({
  src,
  title,
  desc,
  status,
  poster,
  className = "",
  txtColor ="",
  resetOnLeave = true,
  playFromStartOnEnter = false,
  ariaHidden = true,
  onMouseEnter,
  onMouseLeave,
}: HoverVideoCardProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    if (playFromStartOnEnter) v.currentTime = 0;
    v.play().catch(() => {});
  };
  const pause = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    if (resetOnLeave) v.currentTime = 0;
  };

  return (
    <div
      className="group relative w-full h-full"
      onPointerEnter={play}
      onPointerLeave={pause}
      onFocus={play}
      onBlur={pause}
      onTouchStart={play}
      onTouchEnd={pause}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // keyboard focus target
      tabIndex={0}
    >
      <video
        ref={ref}
        className={`rounded-lg w-full h-[60vw] object-cover max-h-[600px] ${className}`}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        aria-hidden={ariaHidden}
        aria-label={ariaHidden ? undefined : "Preview video"}
      />
      <div className="pointer-events-none md:absolute w-full top-0 z-10 lg:block">
        <div
          className="
      md:m-3 md:flex md:items-center md:justify-between
      md:opacity-0 md:translate-y-0 md:transition-opacity md:duration-200 md:ease-out
      md:group-hover:opacity-100 md:group-hover:translate-x-0
    "
        >
          {/* Left content */}
          <div className="flex flex-col md:flex-row py-3 md:py-0 w-full md:gap-[20%]">
            <p className={`text-sm md:text-[16px] leading-none pb-[6px] text-black-20 ${txtColor}`}>{title}</p>
            <span className={`text-[8px] md:text-sm leading-none text-gray-400 pb-2 ${txtColor}`}>{desc}</span>
            <span className="bg-gray-200 py-1 px-2 text-[8px] w-fit rounded-2xl md:hidden">{status}</span>
          </div>
          {/* Plus button (clickable) */}
          <button
            className={`pointer-events-auto h-8 w-8 items-center justify-center text-base leading-none hidden md:inline-flex ${txtColor}`}
            aria-label="Open case"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
