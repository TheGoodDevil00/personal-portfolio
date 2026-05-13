/**
 * Resume PDF Generator
 *
 * Reads content/resume.json and generates public/resume.pdf
 * using @react-pdf/renderer.
 *
 * Usage: pnpm generate-resume
 *
 * NOTE: This script requires @react-pdf/renderer and tsx to be installed.
 * Install them with: pnpm add @react-pdf/renderer && pnpm add -D tsx
 */

import React from "react";
import { renderToFile, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import fs from "fs/promises";
import path from "path";
import type { Resume } from "../lib/content";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2B4559",
    paddingBottom: 12,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    fontSize: 9,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#2B4559",
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  entryContainer: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#2B4559",
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  entrySubtitle: {
    fontSize: 9,
    color: "#666",
    marginTop: 1,
  },
  entryDate: {
    fontSize: 9,
    color: "#666",
  },
  bullet: {
    fontSize: 9.5,
    lineHeight: 1.5,
    marginTop: 2,
    paddingLeft: 8,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  skillCategory: {
    width: "45%",
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  skillList: {
    fontSize: 9,
    color: "#444",
  },
  projectEntry: {
    marginBottom: 6,
  },
  projectName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  projectDesc: {
    fontSize: 9,
    color: "#555",
  },
  certEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  certName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  certIssuer: {
    fontSize: 9,
    color: "#666",
  },
  certYear: {
    fontSize: 9,
    color: "#666",
  },
});

function ResumePDF({ resume }: { resume: Resume }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{resume.meta.name}</Text>
          <Text style={styles.title}>{resume.meta.title}</Text>
          <View style={styles.contactRow}>
            {resume.meta.location && <Text>{resume.meta.location}</Text>}
            {resume.meta.email && <Text>{resume.meta.email}</Text>}
            {resume.meta.phone && <Text>{resume.meta.phone}</Text>}
            {resume.meta.github && <Text>{resume.meta.github}</Text>}
            {resume.meta.linkedin && <Text>{resume.meta.linkedin}</Text>}
          </View>
        </View>

        {/* Summary */}
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summary}>{resume.summary}</Text>

        {/* Experience */}
        <Text style={styles.sectionTitle}>Experience</Text>
        {resume.experience.map((exp, i) => (
          <View key={i} style={styles.entryContainer}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{exp.role}</Text>
              <Text style={styles.entryDate}>
                {exp.startDate} — {exp.endDate}
              </Text>
            </View>
            <Text style={styles.entrySubtitle}>
              {exp.company} · {exp.location}
            </Text>
            {exp.bullets.map((bullet, j) => (
              <Text key={j} style={styles.bullet}>
                ▸ {bullet}
              </Text>
            ))}
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        {resume.education.map((edu, i) => (
          <View key={i} style={styles.entryContainer}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{edu.degree}</Text>
              <Text style={styles.entryDate}>
                {edu.startDate} — {edu.endDate}
              </Text>
            </View>
            <Text style={styles.entrySubtitle}>
              {edu.institution} · {edu.location}
            </Text>
            {edu.notes && (
              <Text style={styles.bullet}>{edu.notes}</Text>
            )}
          </View>
        ))}

        {/* Skills */}
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {Object.entries(resume.skills).map(([category, skills]) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <Text style={styles.skillList}>{skills.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resume.projects.map((project, i) => (
              <View key={i} style={styles.projectEntry}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
              </View>
            ))}
          </>
        )}

        {/* Certifications */}
        {resume.certifications && resume.certifications.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {resume.certifications.map((cert, i) => (
              <View key={i} style={styles.certEntry}>
                <View>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>{cert.issuer}</Text>
                </View>
                <Text style={styles.certYear}>{cert.year}</Text>
              </View>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
}

async function main() {
  const resumePath = path.join(process.cwd(), "content", "resume.json");
  const outputPath = path.join(process.cwd(), "public", "resume.pdf");

  const raw = await fs.readFile(resumePath, "utf-8");
  const resume: Resume = JSON.parse(raw);

  await renderToFile(<ResumePDF resume={resume} />, outputPath);

  console.log(`✅ Resume PDF generated at: ${outputPath}`);
}

main().catch((err) => {
  console.error("Failed to generate resume PDF:", err);
  process.exit(1);
});
