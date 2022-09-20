import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
    <ThreeCircles
        height="100"
        width="100"
        color=""
        wrapperStyle={{margin: 'auto'}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#5c2d91"
        innerCircleColor="#fff"
        middleCircleColor="#5c2d91"
    />
);