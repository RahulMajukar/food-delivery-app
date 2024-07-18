import { useEffect, useState } from "react";

const LazyLoading = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return loaded ? <img src={src} alt={alt} loading="lazy" /> : <div className="w-full h-24 bg-gray-200 flex items-center justify-center">Image Loading...</div>;
};

export default LazyLoading;