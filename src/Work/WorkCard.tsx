import { useRef } from "react";

type HoverVideoCardProps = {
  src: string;
  poster?: string;
  className?: string;
  resetOnLeave?: boolean;
  playFromStartOnEnter?: boolean;
  ariaHidden?: boolean;
};

export default function WorkCard({
  src,
  poster,
  className = "",
  resetOnLeave = true,
  playFromStartOnEnter = false,
  ariaHidden = true,
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
      // optional keyboard focus target
      tabIndex={0}
    >
      <video
        ref={ref}
        className={`rounded-lg w-full h-full object-cover max-h-[600px] ${className}`}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        aria-hidden={ariaHidden}
        aria-label={ariaHidden ? undefined : "Preview video"}
      />

      {/* Overlay now ignores pointer so it won't cancel hover */}
      {/* <div className="pointer-events-auto absolute inset-0 z-10 hidden lg:group-hover:flex lg:justify-between p-4">
        <div className="flex w-full gap-[20%]">
          <p className="text-sm leading-none">Oreo x Pacman</p>
          <span className="text-[8px] leading-none">AR EXPERIENCE</span>
        </div>
        <button
          className="pointer-events-auto h-0"
          aria-label="Open case"
        >
          +
        </button>
      </div> */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden lg:block">
        <div
          className="
      m-4 flex items-start justify-between
      opacity-0 translate-y-4 transition-opacity duration-1500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0
    "
        >
          {/* Left content */}
          <div className="flex w-full gap-[20%]">
            <p className="text-sm leading-none">Oreo x Pacman</p>
            <span className="text-[10px] leading-none">AR EXPERIENCE</span>
          </div>

          {/* Plus button (clickable) */}
          <button
            className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black text-base leading-none"
            aria-label="Open case"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
