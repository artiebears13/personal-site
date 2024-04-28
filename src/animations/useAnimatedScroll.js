import { useEffect, useState } from 'react';

const useAnimatedScroll = (elementRef, animationClass) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            // console.log(element.getBoundingClientRect().bottom);
            if (element && !animated) {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight && elementPosition >= 0) {
                    // element.classList.add('scale-in-center');
                    console.log(animationClass);
                    element.classList.add(animationClass);
                    setTimeout(() => {element.classList.remove(animationClass)}, 500);
                    setAnimated(true);
                }
            }

        };

        // const resetAnimation = () => {
        //     const element = elementRef.current;
        //     if (element) {
        //         const elementPosition = element.getBoundingClientRect().top;
        //         const windowHeight = window.innerHeight;
        //
        //         if (elementPosition < windowHeight) {
        //             setAnimated(false);
        //         }
        //     }
        // };

        // Initial check for animation
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Check animation state when the component is resized or the page is scrolled
        // window.addEventListener('resize', resetAnimation);
        // window.addEventListener('scroll', resetAnimation);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('resize', resetAnimation);
            // window.removeEventListener('scroll', resetAnimation);
        };
    }, [animated, elementRef]);

    return animated;
};

export default useAnimatedScroll;
