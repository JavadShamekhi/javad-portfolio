import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { resumeData } from '@/lib/resumeData'

const styles = StyleSheet.create({
  page: { padding: 24, fontFamily: 'Helvetica', fontSize: 11 },
  header: { marginBottom: 12 },
  name: { fontSize: 20, fontWeight: 700 },
  title: { color: '#555', marginTop: 2 },
  sectionTitle: { fontSize: 14, marginTop: 12, marginBottom: 6, fontWeight: 700 },
  bullet: { marginLeft: 10, marginBottom: 2 },
  row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
})

function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name}</Text>
          <Text style={styles.title}>{resumeData.title}</Text>
          <Text>{resumeData.summary}</Text>
        </View>

        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>{resumeData.skills.join(' • ')}</Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        {resumeData.experience.map((e, i) => (
          <View key={i} style={{ marginBottom: 6 }}>
            <View style={styles.row}>
              <Text>{e.title}{e.org ? ` • ${e.org}` : ''}</Text>
              <Text>{e.period}</Text>
            </View>
            {e.bullets?.map((b, j) => (
              <Text key={j} style={styles.bullet}>• {b}</Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        {resumeData.education.map((ed, i) => (
          <View key={i} style={{ marginBottom: 6 }}>
            <View style={styles.row}>
              <Text>{ed.title}{ed.org ? ` • ${ed.org}` : ''}</Text>
              <Text>{ed.period}</Text>
            </View>
            {ed.details ? <Text>{ed.details}</Text> : null}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Projects</Text>
        {resumeData.projects.map((p, i) => (
          <View key={i} style={{ marginBottom: 6 }}>
            <Text>{p.title}</Text>
            <Text>{p.description}</Text>
            <Text>{p.tech.join(', ')}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const buffer = await pdf(<ResumePDF />).toBuffer()
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"')
    res.setHeader('Cache-Control', 'no-store')
    res.status(200).send(buffer)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Failed to generate PDF' })
    }
  }
}


