import {Power1, TimelineMax as Timeline} from 'gsap';

const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({paused: true});
    const content = node.querySelector('div');
    const text = node.querySelector("span");

    timeline
        .from(node, 0, {display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .from(content, .7, {autoAlpha: 0, y: 15, ease: Power1.easeInOut}, 0.125)
        .from(text, .7, {autoAlpha: 0, y: -15, ease: Power1.easeInOut}, 0.125);

    return timeline;
};

const getNotFoundTimeline = (node, delay) => {
    const timeline = new Timeline({paused: true});
    if (node != null) {
        const content = node.querySelector('div');

        timeline
            .from(node, 0, {display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
            .from(content, .7, {autoAlpha: 0, y: 15, ease: Power1.easeInOut}, 0.125);
    }

    return timeline;
};

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({paused: true});
    const texts = node.querySelectorAll('.button-container');

    timeline
        .from(node, 0, {display: 'canvas', autoAlpha: 0, delay})
        .staggerFrom(texts, 1.75, {autoAlpha: 0, x: -100, ease: Power1.easeOut}, 0.125);

    return timeline;
};

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline;

    console.log("pathname: " + pathname);

    if (pathname === '/')
        timeline = getHomeTimeline(node, delay);
    else if (pathname === "/not-found")
        timeline = getNotFoundTimeline(node, delay);
    else
        timeline = getDefaultTimeline(node, delay);

    window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()))
};

export const exit = (node) => {
    const timeline = new Timeline({paused: true});

    timeline.to(node, 0.15, {autoAlpha: 0, ease: Power1.easeOut});
    timeline.play();
};