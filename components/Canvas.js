import React from "react";
import useCanvas from "./useCanvas";

export const Canvas = (props) => {
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);

	return <canvas ref={canvasRef} {...rest} height={200} width={870} />;
};

export const draw = (ctx) => {
	ctx.font = "24px Arial";
	ctx.fillText("Hi, I'm Jack Burgess", 0, 40);
	const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	const particles = [];
	for (let y = 0, y2 = data.height; y < y2; y++) {
		for (let x = 0, x2 = data.width; x < x2; x++) {
			if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
				const particle = {
					x: x,
					y: y,
				};
				particles.push(particle);
			}
		}
	}
	ctx.fillStyle = "#F4CE61";
	for (let i = 0, j = particles.length; i < j; i++) {
		const particle = particles[i];
		ctx.fillRect(particle.x * 4, particle.y * 4, 3.5, 3.5);
	}
};
