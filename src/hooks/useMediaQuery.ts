import { useState, useEffect } from "react";

//ini artinya passing data variable "query" adalah string
// Pertanyaan / Question (?)
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  // console.log(query)
  // console.log(matches)

  useEffect(() => {
    console.log('useEffect')
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return matches;
};

export default useMediaQuery;