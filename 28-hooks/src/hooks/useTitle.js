import { useEffect } from 'react';

// custom hooks
export default function useTitle(title) {
  useEffect(() => {
    // const prevTitle = document.title;
    document.title = title;

    // console.log(prevTitle);
    console.log(document.title);

    // return () => (document.title = prevTitle);
    return () => (document.title = title);
  }, [title]);
}
