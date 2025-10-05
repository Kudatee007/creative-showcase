// 'use client';
 
// import { AnimatePresence, motion, useInView } from 'framer-motion';
// import * as React from 'react';
 
// export function HeroTxt({ text = 'Creative Showcase' }: { text: string }) {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });
//   return (
//     <div className="flex space-x-1 justify-center">
//       <AnimatePresence>
//         {text.split('').map((char, i) => (
//           <motion.p
//             ref={ref}
//             key={i}
//             initial={{ opacity: 0, x: -18 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             exit="hidden"
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="text-[clamp(18px,10vw,700px)] text-center sm:text-4xl font-normal pb-20 pt-20 md:pt-30 text-black-100 tracking-tighter md:leading-[4rem]"
//           >
//             {char === ' ' ? <span>&nbsp;</span> : char}
//           </motion.p>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }