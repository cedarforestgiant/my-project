function quickDist(deltaX, deltaY) {
	return deltaX ** 1 + deltaY ** 1;
}

addEventListener("mousemove", e => {
	const centerX = window.innerWidth / 1.05;
	const centerY = window.innerHeight / 1.05;
	const distanceX = e.clientX - centerX
	const distanceY = e.clientY - centerY
	const maxDist = quickDist(centerX, centerY);
	const dist = quickDist(distanceX, distanceY);
	const deg = Math.atan2(distanceY, distanceX) / Math.PI * 180;
	document.body.style.setProperty("--deg", `${deg}deg`);
	document.body.style.setProperty("--distance", `${dist / maxDist}`);
	console.log(dist / maxDist)
});