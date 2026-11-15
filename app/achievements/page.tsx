import type { Metadata } from 'next'
import { Trophy, Building2, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Competitive achievements and engineering milestones of Hitesh Patil, including First Prize at MIT-WPU Incubex 2026 Innovation Challenge for real-time conveyor computer vision defect detection and MQTT IoT dashboard.',
  alternates: {
    canonical: 'https://thegooddevil.space/achievements',
  },
  openGraph: {
    title: 'Achievements | Hitesh Patil',
    description:
      'Competitive achievements and engineering milestones of Hitesh Patil, including First Prize at MIT-WPU Incubex 2026 Innovation Challenge for real-time conveyor computer vision defect detection and MQTT IoT dashboard.',
    url: 'https://thegooddevil.space/achievements',
  },
}

export default function AchievementsPage() {
  return (
    <>
      {/* Atmospheric Deep Void Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-[100vw] h-[600px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <main className="w-full relative z-10 max-w-container-max mx-auto px-4 md:px-8 pt-28 pb-section flex-grow">
        {/* Header Section */}
        <header className="flex flex-col gap-4 max-w-3xl mb-section">
          <p className="font-label-mono text-label-mono text-slate-hint uppercase">
            03 // ACHIEVEMENTS
          </p>
          <h1 className="font-display text-4xl md:text-display text-silver-mist">
            Achievements
          </h1>
          <p className="font-body text-body text-slate-hint max-w-xl mt-2 leading-relaxed">
            Competitive innovation challenges, hackathon championships, and engineering milestones.
          </p>
        </header>

        {/* Achievement Cards */}
        <div className="flex flex-col gap-element max-w-4xl">
          {/* Card: Incubex 2026 Innovation Challenge */}
          <div className="relative bg-surface/40 backdrop-blur-[8px] border border-primary-container/20 p-6 md:p-8 rounded-xl group hover:bg-surface-container-high/50 hover:border-primary-container/40 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="font-subheading text-subheading text-silver-mist mb-1">
                  1st Prize – Incubex 2026 Innovation Challenge
                </h3>
                <div className="flex items-center gap-2 font-body-sm text-body-sm text-primary">
                  <Trophy className="w-4 h-4 stroke-[1.5]" />
                  <span>MIT World Peace University (MIT-WPU) • Pune, India</span>
                </div>
              </div>
              <div className="bg-surface-container border border-primary-container/30 px-3 py-1 rounded font-label-mono text-caption text-slate-hint uppercase">
                Winner // 2026
              </div>
            </div>

            <p className="font-label-mono text-caption text-slate-hint uppercase tracking-wider mb-5">
              Role: Lead &bull; Computer Vision Pipeline &amp; IoT Telemetry
            </p>

            <ul className="list-none space-y-3 font-body text-body text-on-surface-variant mb-6">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Headed our team&apos;s computer vision pipeline, developing an entire model suite and evaluation software for real-time automated quality assurance on factory conveyor systems.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Engineered and trained real-time vision models to identify malformed, dented, and misaligned cans on a high-speed conveyor belt under changing industrial illumination.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Architected an industrial monitoring dashboard ingesting live machine sensor telemetry streams via MQTT, synchronizing physical conveyor states with visual defect detection in real time.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                COMPUTER VISION
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                MQTT PROTOCOL
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                REAL-TIME INFERENCE
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                PYTHON
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                OPENCV
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                EDGE AI
              </span>
            </div>
          </div>

          {/* Card: NIDAR 2027 RescueSwarm */}
          <div className="relative bg-surface/40 backdrop-blur-[8px] border border-primary-container/20 p-6 md:p-8 rounded-xl group hover:bg-surface-container-high/50 hover:border-primary-container/40 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="font-subheading text-subheading text-silver-mist mb-1">
                  Track 1 Team Lead – NIDAR 2027 RescueSwarm
                </h3>
                <div className="flex items-center gap-2 font-body-sm text-body-sm text-primary">
                  <Building2 className="w-4 h-4 stroke-[1.5]" />
                  <span>Autonomous Multi-Drone Survivor Search &amp; Aid Delivery Challenge &bull; Pune, India</span>
                </div>
              </div>
              <div className="bg-surface-container border border-primary-container/30 px-3 py-1 rounded font-label-mono text-caption text-slate-hint uppercase">
                Current
              </div>
            </div>

            <ul className="list-none space-y-3 font-body text-body text-on-surface-variant mb-6">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Directing a 10-member multidisciplinary engineering team for Track 1 of the national drone innovation challenge, building collaborative multi-drone systems for survivor search, geotagging, and payload delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Engineered onboard computer vision pipeline for real-time human detection utilizing YOLO26n deployed on a Raspberry Pi 5 for network-independent inference.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-tertiary-fixed-dim mt-1 stroke-[1.5] shrink-0" />
                <span>
                  Architected mission-critical Ground Control Station (GCS) interface for unified multi-drone telemetry ingestion, spatial mapping, and live survivor tracking.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                YOLO26N
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                RASPBERRY PI 5
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                EDGE AI
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                MAVLINK
              </span>
              <span className="font-label-mono text-caption text-on-secondary-container bg-surface-container border border-outline-variant px-2 py-1 rounded">
                AUTONOMOUS SYSTEMS
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
