/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useRef, useState, useEffect } from 'react';

/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/porto1.png',
    title: 'Top Up Games App',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://landing-game.vercel.app/',
  },
  {
    imgSrc: '/images/porto3.png',
    title: 'PLN Dashboard',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://demo-ui-pln-dashboard.vercel.app/',
  },
  {
    imgSrc: '/images/porto2.png',
    title: 'Kemenkes Dashboard',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://kemenkes.vercel.app/',
  },
  {
    imgSrc: '/images/porto5.png',
    title: 'Garansi Bank Dashboard',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://garansi-bank.vercel.app/',
  },
  {
    imgSrc: '/images/porto4.png',
    title: 'BPDLH Dashboard',
    tags: ['UI', 'Website', 'Development'],
    projectLink: 'https://bpdlh.vercel.app/',
  },
  // Add more projects here — new entries automatically appear in the scroll track
];

const Work = () => {
  const trackRef = useRef(null);

  // Drag state (refs = no re-render needed mid-drag)
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const velX = useRef(0);
  const lastX = useRef(0);
  const rafId = useRef(null);
  const hasDragged = useRef(false); // distinguish click vs drag

  const [dragging, setDragging] = useState(false);

  // Cleanup any running momentum animation on unmount
  useEffect(() => () => { if (rafId.current) cancelAnimationFrame(rafId.current); }, []);

  const cancelMomentum = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  const startMomentum = () => {
    let vel = velX.current;
    const tick = () => {
      if (!trackRef.current || Math.abs(vel) < 0.5) return;
      trackRef.current.scrollLeft -= vel;
      vel *= 0.92; // friction — higher = more glide
      rafId.current = requestAnimationFrame(tick);
    };
    tick();
  };

  // ── Mouse ─────────────────────────────────────────────────────────────────

  const handleMouseDown = (e) => {
    cancelMomentum();
    isDown.current = true;
    hasDragged.current = false;
    setDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    velX.current = 0;
    lastX.current = e.pageX;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
    velX.current = e.pageX - lastX.current;
    lastX.current = e.pageX;
  };

  const stopDrag = () => {
    if (!isDown.current) return;
    isDown.current = false;
    setDragging(false);
    startMomentum();
  };

  // Block card link navigation when the pointer actually dragged
  const handleClick = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // ── Touch ─────────────────────────────────────────────────────────────────

  const handleTouchStart = (e) => {
    cancelMomentum();
    hasDragged.current = false;
    startX.current = e.touches[0].pageX;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    velX.current = 0;
    lastX.current = e.touches[0].pageX;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = x - startX.current;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
    velX.current = x - lastX.current;
    lastX.current = x;
  };

  const handleTouchEnd = () => startMomentum();

  // ── Arrow nav ─────────────────────────────────────────────────────────────

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section id="work" className="section">
      <div className="container">

        {/* Section header + arrow buttons */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="headline-2 reveal-up">My portfolio highlights</h2>

          <div className="flex gap-2 shrink-0 reveal-up">
            <button
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 grid place-items-center rounded-xl bg-zinc-800 hover:bg-zinc-700 ring-1 ring-inset ring-zinc-50/5 transition-colors"
              aria-label="Scroll projects left"
            >
              <span className="material-symbols-rounded">arrow_back</span>
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-10 h-10 grid place-items-center rounded-xl bg-zinc-800 hover:bg-zinc-700 ring-1 ring-inset ring-zinc-50/5 transition-colors"
              aria-label="Scroll projects right"
            >
              <span className="material-symbols-rounded">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Drag scroll track */}
        <div
          ref={trackRef}
          className={`scroll-track flex gap-5 overflow-x-auto pb-5 select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="w-[280px] md:w-[320px] shrink-0 reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;

