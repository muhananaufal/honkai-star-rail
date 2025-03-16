import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: '#clip',
				start: 'center center',
				end: '+=800 center',
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to('.mask-clip-path', {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
		});
	});

	return (
		<div id="about" className="min-h-screen w-screen">
			<div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
				<p className="font-general text-sm uppercase md:text-[10px]">The next Trailblazing</p>

				<AnimatedTitle title="Amph<b>o</b>reus <br /> the eter<b>n</b>al l<b>a</b>nd" containerClass="mt-5 !text-black text-center" />

				<div className="about-subtext">
					<p>Amphoreus, also known as The Eternal Land</p>
					<p className="text-gray-500">Is an isolated world governed by the Chrysos Heirs, and was once in a state of chaos until the Titans emerged from the remnants of the gods. The &quot;Eternal Holy City&quot; of Okhema, serves as the last refuge for its people and their allies.</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path about-image">
					<img src="img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
				</div>
			</div>
		</div>
	);
};

export default About;
