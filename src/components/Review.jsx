/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

const reviews = [
  {
    content:
      'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge',
  },
  {
    content:
      'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/images/people-2.jpg',
    company: 'NexaWave',
  },
  {
    content:
      'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/images/people-3.jpg',
    company: 'CodeCraft',
  },
  {
    content:
      'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/images/people-4.jpg',
    company: 'BrightWeb',
  },
  {
    content:
      'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/images/people-5.jpg',
    company: 'TechMosaic',
  },
  {
    content:
      'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/images/people-6.jpg',
    company: 'Skyline Digital',
  },
];

const Review = () => {
  return (
    <section id="review" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">What Clients Say</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Here&apos;s what people I&apos;ve worked with have to say.
        </p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <div
              key={key}
              className="reveal-up bg-zinc-800 p-6 rounded-2xl ring-1 ring-inset ring-zinc-50/5 flex flex-col gap-4"
            >
              <p className="text-zinc-300 text-sm leading-relaxed">&ldquo;{content}&rdquo;</p>

              <div className="flex items-center gap-3 mt-auto">
                <figure className="img-box w-9 h-9 rounded-full overflow-hidden shrink-0">
                  <img src={imgSrc} alt={name} className="img-cover" width={36} height={36} />
                </figure>
                <div>
                  <p className="text-sm font-medium text-zinc-100">{name}</p>
                  <p className="text-xs text-zinc-500">{company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
