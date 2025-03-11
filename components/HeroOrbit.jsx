export const HeroOrbit = ({
    children,
    size, // Default size
    rotate, // Default rotation
    orbitDuration = 1, // Default spin duration
    shouldOrbit = false, // Default orbiting behavior
    spinDuration=1,
    shouldSpin=false
  }) => {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={shouldOrbit ? "animate-spin" : ""}
          style={{
            animationDuration: `${orbitDuration}s`,
          }}
        >
          <div
            className="flex items-start justify-start"
            style={{
              transform: `rotate(${rotate}deg)`,
              height: `${size}px`,
              width: `${size}px`,
            }}
          >
            <div className={shouldSpin ? "animate-spin" : ""} style={{animationDuration:`${spinDuration}s`}}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotate * -1}deg)`,
              }}
            >
              {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  