import React, { useRef, useEffect } from 'react';

const ManualParticlesBackground = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    useEffect(() => {
        let seed = 12345;
        function seededRandom() {
            var x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = [];
        const STAR_COUNT = 2000;
        let width = window.innerWidth;
        let height = window.innerHeight;
        const perspective = width;

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, width, height); // important for mobile
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: (seededRandom() - 0.5) * 2 * width,
                y: (seededRandom() - 0.5) * 2 * height,
                z: seededRandom() * width,
                baseRadius: seededRandom() * 1.5 + 0.5,
                pulsePhase: seededRandom() * Math.PI * 2,
                pulseSpeed: 0.02 + seededRandom() * 0.02,
            });
        }

        const handleMouseMove = (e) => {
            mouse.current.targetX = e.clientX;
            mouse.current.targetY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        function animate() {
            ctx.clearRect(0, 0, width, height);

            mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
            mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

            const centerX = width / 2;
            const centerY = height / 2;
            const rotateSpeed = 0.00003;
            const angleX = (mouse.current.y - centerY) * rotateSpeed;
            const angleY = (mouse.current.x - centerX) * rotateSpeed;

            ctx.save();
            ctx.translate(centerX, centerY);

            stars.forEach((star) => {
                star.pulsePhase += star.pulseSpeed;
                if (star.pulsePhase > Math.PI * 2) {
                    star.pulsePhase -= Math.PI * 2;
                }

                const pulseRadius = star.baseRadius * (0.8 + 0.4 * (0.5 + Math.sin(star.pulsePhase) / 2));
                const cosY = Math.cos(angleY);
                const sinY = Math.sin(angleY);
                let x = star.x * cosY - star.z * sinY;
                let z = star.x * sinY + star.z * cosY;
                const cosX = Math.cos(angleX);
                const sinX = Math.sin(angleX);
                let y = star.y * cosX - z * sinX;
                z = star.y * sinX + z * cosX;
                const scale = perspective / (perspective + z);
                const projX = x * scale;
                const projY = y * scale;

                ctx.beginPath();
                ctx.arc(projX, projY, pulseRadius * scale, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            });

            ctx.restore();
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
};

export default ManualParticlesBackground;
