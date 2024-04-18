function Eyes({ num, className }: { num: Number; className?: string }) {
  document.addEventListener("mousemove", (e) => {
    const lEye = document.getElementById(`l-eye${num}`);
    const rEye = document.getElementById(`r-eye${num}`);

    const mx = e.clientX;
    const my = e.clientY;

    if (lEye && rEye) {
      const lEyeRect = lEye.getBoundingClientRect();
      const rEyeRect = rEye.getBoundingClientRect();

      const lEyeX = lEyeRect.left + lEyeRect.width / 2;
      const lEyeY = lEyeRect.top + lEyeRect.height / 2;

      const rEyeX = rEyeRect.left + rEyeRect.width / 2;
      const rEyeY = rEyeRect.top + rEyeRect.height / 2;

      const dx1 = mx - lEyeX;
      const dy1 = my - lEyeY;

      const dx2 = mx - rEyeX;
      const dy2 = my - rEyeY;

      const angle1 = Math.atan2(dy1, dx1);
      const angle2 = Math.atan2(dy2, dx2);

      const deg1 = angle1 * (180 / Math.PI);
      const deg2 = angle2 * (180 / Math.PI);

      lEye.style.transform = `rotate(${deg1 + 180}deg)`;
      rEye.style.transform = `rotate(${deg2 + 180}deg)`;
    }
  });

  return (
    <div
      className={`w-[100dvw] h-[100dvh] flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="w-[600px] h-[310px] absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        {[`l-eye${num}`, `r-eye${num}`].map((item, index) => {
          return (
            <div
              key={index}
              id={item}
              className={`w-[200px] h-[200px] bg-white rounded-[200vw] absolute top-1/2 ${
                index === 1 ? "left-[16%]" : "left-[55%]"
              } -translate-y-1/2`}
            >
              <div
                id={`${item}-black`}
                className="w-[60%] h-[60%] bg-zinc-800 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-[100%] h-[15%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[15%] h-[100%] bg-white rounded-full absolute left-0"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eyes;
