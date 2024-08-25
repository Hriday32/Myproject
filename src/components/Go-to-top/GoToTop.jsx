import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const GoToTop = () => {
  const [isvisible, setvisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const listen = () => {
    let height = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > height) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listen);
  }, []);

  return (
    <>
      {isvisible && (
        <wrapper className="fixed right-4 bottom-4">
          <button
            className="top-Btn bg-red-500 p-2 rounded-full"
            onClick={goToBtn}
          >
            <FaArrowAltCircleUp className="text-5xl" />
          </button>
        </wrapper>
      )}
    </>
  );
};
export default GoToTop;
