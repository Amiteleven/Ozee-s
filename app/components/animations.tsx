"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import Image from "next/image";

// Luxury easing curves
const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const cinematicEase: [number, number, number, number] = [0.6, -0.05, 0.01, 0.99];
const springConfig = { stiffness: 300, damping: 20 };

// Cinematic text reveal with parallax
export function CinematicText({ 
  children, 
  className = "", 
  delay = 0,
  as: Component = "h1"
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 120, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, ease: cinematicEase, delay }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}

// Premium staggered fade in
export function StaggerFadeIn({ 
  children, 
  className = "",
  delay = 0,
  yOffset = 80,
  scale = false
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  yOffset?: number;
  scale?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 1, 
        ease: luxuryEase,
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3D Card with tilt and glow
export function PremiumCard({ 
  children, 
  className = "",
  glowColor = "#E6C665",
  tiltIntensity = 15
}: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(x, [-100, 100], [-tiltIntensity, tiltIntensity]);
  const springX = useSpring(rotateX, { stiffness: 400, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 400, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY }}
      whileHover={{ scale: 1.03, zIndex: 50, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative preserve-3d ${className}`}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}25, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

// Magnetic button with premium feel
export function MagneticButton({ 
  children, 
  className = "",
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// Floating premium particles
function createParticleRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export function FloatingParticles({ count = 30, color = "#E6C665" }) {
  const particles = useMemo(() => {
    const rng = createParticleRng(42);
    return Array.from({ length: count }, () => ({
      size: rng() * 5 + 2,
      left: `${rng() * 100}%`,
      top: `${rng() * 100}%`,
      blur: rng() * 1,
      yDistance: -40 - rng() * 30,
      xDistance: rng() * 30 - 15,
      duration: 4 + rng() * 4,
      delay: rng() * 3,
    }));
  }, [count]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: color,
            left: p.left,
            top: p.top,
            filter: `blur(${p.blur}px)`,
          }}
          animate={{
            y: [0, p.yDistance, 0],
            x: [0, p.xDistance, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// Gold shimmer sweep
export function GoldShimmer() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6C665]/15 to-transparent"
      animate={{
        x: ["-100%", "200%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Premium image reveal on scroll
export function ImageReveal({ 
  src, 
  alt, 
  className = "",
  priority = false,
  glowColor = "#E6C665"
}: { 
  src: string; 
  alt: string; 
  className?: string;
  priority?: boolean;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1.15, 1]);
  const y = useTransform(scrollY, [0, 600], [60, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={isInView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : {}}
      transition={{ duration: 1.4, ease: cinematicEase }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div style={{ scale, y }} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}30, transparent 70%)`,
        }}
        initial={{ opacity: 0.8 }}
        animate={isInView ? { opacity: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
    </motion.div>
  );
}

// Animated counter
export function AnimatedCounter({ 
  end, 
  suffix = "", 
  prefix = "",
  duration = 2.5 
}: { 
  end: number; 
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums font-black text-2xl">
      {prefix}{count}{suffix}
    </span>
  );
}

// Premium marquee
export function PremiumMarquee({ 
  items, 
  speed = 50 
}: { 
  items: string[]; 
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -items.length * 300] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-7xl md:text-9xl font-black text-[#1A1412]/[0.03] uppercase tracking-tighter"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Luxury section divider
export function LuxuryDivider() {
  return (
    <div className="relative h-32 w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: luxuryEase }}
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6C665]/60 to-transparent" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: luxuryEase }}
      >
        <div className="w-4 h-4 bg-[#E6C665] rounded-full shadow-lg shadow-[#E6C665]/50" />
      </motion.div>
    </div>
  );
}

// Spotlight effect for cards
export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useTransform(mouseX, [0, 1], ["-20%", "120%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["-20%", "120%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E6C665]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(230,198,101,0.12), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

// Text scramble effect
export function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText || text}
    </span>
  );
}

// Smooth scroll indicator
export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 rounded-full border-2 border-[#E6C665]/50 flex items-start justify-center p-1.5"
      >
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-[#E6C665] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

// Premium loading screen
export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0B0806] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="relative mb-8"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-24 h-24 rounded-full border-4 border-[#E6C665]/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#E6C665]/40 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7DC8D] to-[#D4AF37] flex items-center justify-center text-[#0B0806] font-serif text-2xl font-black">
              O
            </div>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#E6C665]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="w-64 h-1 bg-[#261D16] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#F7DC8D] via-[#E6C665] to-[#D4AF37]"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
      </div>
      <p className="mt-4 text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">
        Crafting Perfection
      </p>
    </motion.div>
  );
}

// Parallax wrapper
export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = ""
}: { 
  children: React.ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
