"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  category?: string
  description?: string
  image?: string
  challenge?: string
  solution?: string
  designProcess?: string
  inspiration?: string
  tools?: string[]
  deliverables?: string[]
  timeline?: string
  url?: string
}

interface PortfolioGalleryProps {
  projects: Project[]
}

export function PortfolioGallery({ projects }: PortfolioGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    challenge: true,
    solution: true,
    designProcess: false,
    inspiration: false,
    deliverables: false,
    tools: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleImageLoad = (projectId: number) => {
    setLoadedImages((prev) => new Set(prev).add(projectId))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -2 }}
                variants={itemVariants}
                className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg hover:border-secondary/40 transition-colors cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedProject(project)}
              >
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border aspect-square mb-2">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={false}
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={75}
                      onLoad={() => handleImageLoad(project.id)}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3">
                      <p className="text-xs text-white font-semibold">View Details</p>
                    </div>
                  </div>

                  {/*
                    Open the project URL for OMNI-LINGUA (id: 11), otherwise open the project's image.
                    Stop propagation so the card still opens the modal when clicked elsewhere.
                  */}
                  {(project.id === 11 && project.url) ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs inline-block no-underline opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto transition-opacity duration-200"
                      aria-label={`Open ${project.title} in new tab`}
                    >
                      Open
                    </a>
                  ) : project.image ? (
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs inline-block no-underline opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto transition-opacity duration-200"
                      aria-label={`Open image for ${project.title} in new tab`}
                    >
                      Open
                    </a>
                  ) : null}
                </div>

                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length === 0 && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-3 sm:p-4 bg-card border-b border-border">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                    quality={90}
                  />
                </div>

                {/* Title and Category */}
                <div>
                  <span className="inline-block px-2 sm:px-3 py-1 bg-secondary/20 text-secondary text-xs sm:text-sm font-semibold rounded-full mb-2 sm:mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-serif mb-2">{selectedProject.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{selectedProject.description}</p>
                </div>

                {/* Expandable Sections */}
                <ExpandableSection
                  title="The Challenge"
                  sectionKey="challenge"
                  isExpanded={expandedSections.challenge}
                  onToggle={toggleSection}
                >
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </ExpandableSection>

                <ExpandableSection
                  title="The Solution"
                  sectionKey="solution"
                  isExpanded={expandedSections.solution}
                  onToggle={toggleSection}
                >
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </ExpandableSection>

                <ExpandableSection
                  title="Design Process"
                  sectionKey="designProcess"
                  isExpanded={expandedSections.designProcess}
                  onToggle={toggleSection}
                >
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.designProcess}
                  </p>
                </ExpandableSection>

                <ExpandableSection
                  title="Inspiration"
                  sectionKey="inspiration"
                  isExpanded={expandedSections.inspiration}
                  onToggle={toggleSection}
                >
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.inspiration}
                  </p>
                </ExpandableSection>

                <ExpandableSection
                  title="Deliverables"
                  sectionKey="deliverables"
                  isExpanded={expandedSections.deliverables}
                  onToggle={toggleSection}
                >
                  <ul className="space-y-1 sm:space-y-2">
                    {(selectedProject?.deliverables || []).map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-xs sm:text-base text-muted-foreground"
                      >
                        <span className="text-secondary shrink-0">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </ExpandableSection>

                <ExpandableSection
                  title="Tools & Timeline"
                  sectionKey="tools"
                  isExpanded={expandedSections.tools}
                  onToggle={toggleSection}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-foreground">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {(selectedProject?.tools || []).map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-foreground">Timeline</h4>
                      <p className="text-sm sm:text-lg font-semibold text-foreground">{selectedProject?.timeline}</p>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

interface ExpandableSectionProps {
  title: string
  sectionKey: string
  isExpanded: boolean
  onToggle: (sectionKey: string) => void
  children: ReactNode
}

function ExpandableSection({ title, children, sectionKey, isExpanded, onToggle }: ExpandableSectionProps) {
  return (
    <div className="border-t border-border">
      <button
        onClick={() => onToggle(sectionKey)}
        className="w-full py-3 sm:py-4 flex items-center justify-between hover:bg-background/50 transition-colors"
      >
        <h3 className="text-base sm:text-lg font-semibold text-secondary text-left">{title}</h3>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <motion.div
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-3 sm:pb-4">{children}</div>
      </motion.div>
    </div>
  )
}
