import { motion } from 'framer-motion'

// Consistent animated heading: small index + title + animated rule.
export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4"
      >
        {index && (
          <span className="font-mono text-sm text-brand">{index}</span>
        )}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent origin-left"
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 mt-3 max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
