// Google Antigravity Style Particles
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'particles-canvas';
            this.canvas.className = 'particles-canvas';
            document.body.insertBefore(this.canvas, document.body.firstChild);
        }

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.maxParticles = 60;
        this.colors = ['#5b9fff', '#8b7fff', '#ff7bac', '#00c9a7'];

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY + window.scrollY;
        });

        // Create particles
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: 0,
            vy: 0,
            radius: Math.random() * 3 + 1,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            alpha: Math.random() * 0.5 + 0.3
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle) => {
            // Google Antigravity style - strong attraction to mouse
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Strong attraction force - like Google Antigravity
                if (distance < 300) {
                    const force = (300 - distance) / 300;
                    const angle = Math.atan2(dy, dx);

                    // Apply strong force
                    particle.vx += Math.cos(angle) * force * 2;
                    particle.vy += Math.sin(angle) * force * 2;
                }
            }

            // Apply friction
            particle.vx *= 0.92;
            particle.vy *= 0.92;

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges (like Google Antigravity)
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle with glow
            this.ctx.save();
            this.ctx.globalAlpha = particle.alpha;

            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 3
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, 'transparent');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
            this.ctx.fill();

            // Core particle
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();

            // Draw connections to nearby particles
            this.particles.forEach((other) => {
                const dx2 = particle.x - other.x;
                const dy2 = particle.y - other.y;
                const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (dist < 120 && dist > 0) {
                    this.ctx.save();
                    this.ctx.globalAlpha = (1 - dist / 120) * 0.3;
                    this.ctx.strokeStyle = particle.color;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            });
        });

        // Draw mouse area indicator
        if (this.mouse.x !== null && this.mouse.y !== null) {
            this.ctx.save();
            this.ctx.globalAlpha = 0.05;
            const mouseGradient = this.ctx.createRadialGradient(
                this.mouse.x, this.mouse.y, 0,
                this.mouse.x, this.mouse.y, 300
            );
            mouseGradient.addColorStop(0, '#5b9fff');
            mouseGradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = mouseGradient;
            this.ctx.beginPath();
            this.ctx.arc(this.mouse.x, this.mouse.y, 300, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    window.particleSystem = new ParticleSystem();
});
