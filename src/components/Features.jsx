import { useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

export const BentoTilt = ({ children, className = '' }) => {
	const [transformStyle, setTransformStyle] = useState('');
	const itemRef = useRef(null);

	const handleMouseMove = (event) => {
		if (!itemRef.current) return;

		const { left, top, width, height } = itemRef.current.getBoundingClientRect();

		const relativeX = (event.clientX - left) / width;
		const relativeY = (event.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * 5;
		const tiltY = (relativeX - 0.5) * -5;

		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
		setTransformStyle(newTransform);
	};

	const handleMouseLeave = () => {
		setTransformStyle('');
	};

	return (
		<div ref={itemRef} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
			{children}
		</div>
	);
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [hoverOpacity, setHoverOpacity] = useState(0);
	const hoverButtonRef = useRef(null);

	const handleMouseMove = (event) => {
		if (!hoverButtonRef.current) return;
		const rect = hoverButtonRef.current.getBoundingClientRect();

		setCursorPosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		});
	};

	const handleMouseEnter = () => setHoverOpacity(1);
	const handleMouseLeave = () => setHoverOpacity(0);

	return (
		<div className="relative size-full">
			<video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
			<div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
				<div>
					<h1 className="bento-title special-font">{title}</h1>
					{description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
				</div>

				{isComingSoon && (
					<div
						ref={hoverButtonRef}
						onMouseMove={handleMouseMove}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
					>
						{/* Radial gradient hover effect */}
						<div
							className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
							style={{
								opacity: hoverOpacity,
								background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
							}}
						/>
						<TiLocationArrow className="relative z-20" />
						<p className="relative z-20">coming soon</p>
					</div>
				)}
			</div>
		</div>
	);
};

const Features = () => (
	<section className="bg-black pb-52">
		<div className="container mx-auto px-3 md:px-10">
			<div className="px-5 py-32">
				<p className="font-circular-web text-lg text-blue-50">Titans</p>
				<div className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
					The Titans are a group of divine beings born from Coreflames sent down by the gods of Amphoreus. Each Titan has an associated Coreflame, and whoever conquers a Coreflame&apos;s Trial can inherit the Titan&apos;s divinity and become a
					demigod.
					<br/>
					<br/>
					The Titans were responsible for the creation of the first heaven, earth, mortals, and the Light Calendar. At this point, all the Titans have fallen, and the Chrysos Heirs are prophesied to take up the Coreflames.
				</div>
			</div>

			<BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
				<BentoCard
					src="videos/feature-1.mp4"
					title={
						<>
							chry<b>s</b>os h<b>e</b>irs
						</>
					}
					description='Are a group of individuals born of golden blood after the Titans of Amphoreus fell. Some of these individuals, chosen by prophecy from the Worldbearing Titan, Kephale, are tasked with plucking the Coreflames from the Titans and
					upholding the world, also called as a "Flame-Chase"'
					isComingSoon
				/>
			</BentoTilt>

			<div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
				<BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
					<BentoCard
						src="videos/feature-2.mp4"
						title={
							<>
								agla<b>e</b>a
							</>
						}
						description="Aglaea the Goldweaver, the Chrysos Heir bearing the Coreflame of Romance... You shall summon the heroes of this world, and lead them to once again embark on an endless journey"
						isComingSoon
					/>
				</BentoTilt>

				<BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
					<BentoCard
						src="videos/feature-3.mp4"
						title={
							<>
								tri<b>b</b>bie
							</>
						}
						description="O Tribios, Holy Maidens of Janusopolis, the Chrysos Heir who stole Passage's Coreflame."
						isComingSoon
					/>
				</BentoTilt>

				<BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
					<BentoCard
						src="videos/feature-4.mp4"
						title={
							<>
								my<b>d</b>ei
							</>
						}
						description="The undying Mydeimos, the lion apart from the rest. O Chrysos Heir that seeks the Coreflame of Strife."
						isComingSoon
					/>
				</BentoTilt>

				<BentoTilt className="bento-tilt_2">
					<div className="flex size-full flex-col justify-between bg-[#3A79B8] p-5">
						<h1 className="bento-title special-font max-w-64 text-black">
							M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
						</h1>

						<TiLocationArrow className="m-5 scale-[5] self-end" />
					</div>
				</BentoTilt>

				<BentoTilt className="bento-tilt_2">
					<video src="videos/feature-5.mp4" loop muted autoPlay className="size-full object-cover object-center" />
				</BentoTilt>
			</div>
		</div>
	</section>
);

export default Features;
