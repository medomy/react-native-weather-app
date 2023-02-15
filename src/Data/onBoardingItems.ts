import { images } from "../constants";
import { OnBoardingItem } from "../types/onboardingItem";

const OnBoardingItems: OnBoardingItem[] = [
    {
        title: "Whereever you are",
        description: "We help you know your weather exact data from any place in the world",
        img: images.thunderImg
    },
    {
        title: "Be aware",
        description: "We will always warn you of bad weather",
        img: images.rainyImg
    },
    {
        title: "Sunny somewhere",
        description: "remember it's always sunny (no not in philadilphia) somewhere",
        img: images.sunnyImg
    }
]

export default OnBoardingItems;