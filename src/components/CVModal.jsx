/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn, FiZoomOut, FiRotateCcw, FiPrinter, FiFileText } from 'react-icons/fi'

export default function CVModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.3, 2.2))
  const handleZoomOut = () => {
    setZoom(prev => {
      const next = Math.max(prev - 0.3, 0.8)
      if (next <= 1) setPan({ x: 0, y: 0 }) // Reset pan when fully zoomed out
      return next
    })
  }

  const handleReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 print:p-0 print:bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Print Stylesheet overlay to force render only the CV document */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              #root, header, nav, footer, section {
                display: none !important;
              }
              body {
                background: white !important;
                color: black !important;
              }
              .no-print {
                display: none !important;
              }
              .print-target {
                display: block !important;
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                height: auto !important;
                background: white !important;
                color: black !important;
                padding: 20mm !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                transform: none !important;
                max-width: 100% !important;
              }
            }
          ` }} />

          {/* Main Modal Container */}
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] bg-dark-card border border-dark-border2 rounded-2xl flex flex-col overflow-hidden shadow-2xl no-print"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border2 bg-black/30 backdrop-blur-sm z-10">
              <div>
                <h3 className="text-text-primary font-semibold text-base">Curriculum Vitae</h3>
                <p className="text-xs text-text-secondary">Aremo Abayomi James — Software Engineer & Technical Lead</p>
              </div>

              {/* Controls & Print Actions */}
              <div className="flex items-center gap-4">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1.5 bg-dark-bg/60 border border-dark-border2 rounded-lg p-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.8}
                    className="p-1.5 text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-secondary transition-colors"
                    title="Zoom Out"
                  >
                    <FiZoomOut size={16} />
                  </button>
                  <span className="text-xs font-mono px-2 text-text-primary select-none">{Math.round(zoom * 100)}%</span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 2.2}
                    className="p-1.5 text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-secondary transition-colors"
                    title="Zoom In"
                  >
                    <FiZoomIn size={16} />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 text-text-secondary hover:text-text-primary transition-colors border-l border-dark-border2 pl-2"
                    title="Reset view"
                  >
                    <FiRotateCcw size={14} />
                  </button>
                </div>

                {/* Primary Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-gold text-dark-bg hover:bg-yellow-400 text-xs font-bold rounded-lg transition-all"
                  >
                    <FiPrinter size={14} />
                    <span>Print / Save PDF</span>
                  </button>
                  <a
                    href="/CV.docx"
                    download="Abayomi_Aremo_CV.docx"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-bg hover:bg-dark-border2 border border-dark-border2 text-text-primary rounded-lg text-xs font-medium transition-all"
                  >
                    <FiFileText size={14} />
                    <span className="hidden md:inline">Download</span> DOCX
                  </a>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-dark-border/40 rounded-full transition-all"
                  title="Close Modal"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Document View Area */}
            <div className="flex-1 overflow-auto bg-dark-bg/40 relative p-6 flex justify-center items-start cursor-grab active:cursor-grabbing">
              <div className="w-full min-h-full flex items-start justify-center py-4">
                <motion.div
                  className="relative origin-top shadow-2xl rounded-lg bg-white text-slate-800 p-12 text-left border border-slate-200 select-text print-target"
                  style={{
                    x: pan.x,
                    y: pan.y,
                    width: '800px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                  }}
                  animate={{
                    scale: zoom,
                  }}
                  drag={zoom > 1}
                  dragConstraints={{ left: -300 * zoom, right: 300 * zoom, top: -200 * zoom, bottom: 800 * zoom }}
                  dragElastic={0.05}
                  dragMomentum={false}
                  onDrag={(e, info) => {
                    setPan(prev => ({
                      x: prev.x + info.delta.x,
                      y: prev.y + info.delta.y,
                    }))
                  }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                  {/* HTML CV Document Content */}
                  <div>
                    {/* Header */}
                    <div className="border-b-2 border-slate-800 pb-4 mb-6">
                      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                        AREMO ABAYOMI JAMES
                      </h1>
                      <h2 className="text-lg font-medium text-slate-600 mb-3">
                        Software Engineer | Full-Stack Developer | Technical Lead
                      </h2>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                        <span>📍 Abuja, Nigeria</span>
                        <span>•</span>
                        <a href="mailto:abayomiaremo0@gmail.com" className="hover:underline text-blue-600">abayomiaremo0@gmail.com</a>
                        <span>•</span>
                        <span>📞 +234 9071637078</span>
                        <span>•</span>
                        <a href="https://github.com/adeboyega" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">github.com/adeboyega</a>
                        <span>•</span>
                        <a href="https://linkedin.com/in/abayomiaremo" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">linkedin.com/in/abayomiaremo</a>
                      </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                        Professional Summary
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-700 mb-2">
                        Software Engineer and Technical Lead with proven experience designing and scaling SaaS platforms across HR, fintech, e-commerce, and asset management domains. Built and deployed systems supporting 2000+ active users, improving operational efficiency, reducing fraud, and enabling business automation.
                      </p>
                      <p className="text-[13px] leading-relaxed text-slate-700">
                        Strong background in full-stack development, system architecture, networking, and cloud infrastructure, with a track record of leading engineering teams and delivering production-ready solutions in fast-paced environments.
                      </p>
                    </div>

                    {/* Core Skills */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                        Core Skills
                      </h3>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
                        <div>
                          <p className="font-bold text-slate-800">Languages & Frameworks:</p>
                          <p className="text-slate-600">JavaScript, TypeScript, Java, Python, React.js, Next.js, React Native, Node.js, Express.js</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Architecture & Systems:</p>
                          <p className="text-slate-600">Microservices Architecture, REST APIs, System Design, Scalable SaaS Platforms, Distributed Systems</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Cloud & DevOps:</p>
                          <p className="text-slate-600">AWS (Lambda, Cloud Services), Google Cloud, Docker (Basic), CI/CD Concepts</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Data & State Management:</p>
                          <p className="text-slate-600">Database Design, SQL/NoSQL, Redux Toolkit</p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-bold text-slate-800">Practices:</p>
                          <p className="text-slate-600">Agile Development, Unit Testing, Performance Optimization</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-4">
                        Experience
                      </h3>

                      {/* Job 1 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">Casalavoro Limited</span>
                            <span className="text-slate-500"> — Head of IT / Lead Software Engineer</span>
                          </div>
                          <span className="text-slate-600 font-medium">Dec 2024 – Apr 2026 | Hybrid</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Led development and deployment of a comprehensive HR Management System used for staff operations and tracking and an inventory/maintenance application that also has project management.</li>
                          <li>Built GPS-enabled attendance system used by 200+ employees, reducing time fraud by 35%.</li>
                          <li>Developed asset management platform with real-time dashboards and audit tracking.</li>
                          <li>Implemented payment system using Paystack handling 120+ transactions monthly.</li>
                          <li>Designed and implemented RESTful APIs for internal and external integrations.</li>
                          <li>Designed scalable microservices architecture handling 200+ users.</li>
                          <li>Developed company-wide inventory, maintenance ticketing, and workflow management system.</li>
                        </ul>
                      </div>

                      {/* Job 2 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">Geebay E-commerce</span>
                            <span className="text-slate-500"> — Technical Team Lead</span>
                          </div>
                          <span className="text-slate-600 font-medium">2024 – Present | Remote / Hybrid</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Led the development and successful launch of the Geebay e-commerce platform (web and mobile).</li>
                          <li>Managed platform architecture, scalability, and system performance.</li>
                          <li>Oversaw payment integrations and third-party services.</li>
                          <li>Implemented system upgrades, security improvements, and feature enhancements.</li>
                          <li>Collaborated with business teams to deliver product-driven features.</li>
                        </ul>
                      </div>

                      {/* Job 3 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">Belsoft Systems</span>
                            <span className="text-slate-500"> — Lead Frontend Engineer</span>
                          </div>
                          <span className="text-slate-600 font-medium">2023 – 2024 | Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Built a cross-platform crypto payments application using React Native and TypeScript.</li>
                          <li>Developed and deployed company website using Next.js and TailwindCSS.</li>
                          <li>Integrated authentication systems and optimized frontend performance.</li>
                        </ul>
                      </div>

                      {/* Job 4 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">Nigerian Air Force Headquarters</span>
                            <span className="text-slate-500"> — Software Developer / IT Administrator</span>
                          </div>
                          <span className="text-slate-600 font-medium">2023 – 2024 | Abuja</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Developed a Visitor Management System to improve security processes.</li>
                          <li>Built server monitoring and access control tools.</li>
                          <li>Supported network administration and IT infrastructure.</li>
                        </ul>
                      </div>

                      {/* Job 5 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">ALX Software Engineering Program</span>
                            <span className="text-slate-500"> — Trainee Engineer</span>
                          </div>
                          <span className="text-slate-600 font-medium">2023</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Built full-stack applications using React, Redux, and Express.js.</li>
                        </ul>
                      </div>

                      {/* Job 6 */}
                      <div>
                        <div className="flex justify-between items-start mb-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-900">Lasot Travel Solutions</span>
                            <span className="text-slate-500"> — Web Developer</span>
                          </div>
                          <span className="text-slate-600 font-medium">2022 – 2023 | Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-[12px] leading-relaxed text-slate-700 space-y-1 pl-1">
                          <li>Developed a cross-platform mobile booking and payment application.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                        Certifications
                      </h3>
                      <div className="flex flex-wrap gap-x-6 text-[13px] text-slate-700 font-medium">
                        <span>🛡️ ALX Software Engineering Program</span>
                        <span>•</span>
                        <span>💡 ALX AICE</span>
                        <span>•</span>
                        <span>🌐 FreeCodeCamp Responsive Web Design</span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                        Education
                      </h3>
                      <div className="space-y-2 text-[13px]">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-bold text-slate-800">Edo State University Uzairue</span>
                            <span className="text-slate-600"> — B.Sc Computer Science</span>
                          </div>
                          <span className="text-slate-500 font-medium">2023</span>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <span className="font-bold text-slate-800">Ahmadu Bello University (ABU DLC)</span>
                            <span className="text-slate-600"> — Master of Information Management</span>
                          </div>
                          <span className="text-slate-500 font-medium">In View</span>
                        </div>
                      </div>
                    </div>

                    {/* Referees */}
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                        Referees
                      </h3>
                      <p className="text-[13px] text-slate-600">Available upon request</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Zoom Helper Alert overlay */}
              {zoom > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-dark-border2 text-[10px] text-text-secondary pointer-events-none select-none no-print">
                  💡 Drag around to pan and navigate the document
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
