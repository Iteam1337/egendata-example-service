import React, { useState, useContext } from 'react'
import Section from './Section'
import ExperienceDraft from './ExperienceDraft'
import { Box, Typography, Modal, Button } from '@smooth-ui/core-sc'
import { StoreContext } from '../../services/StoreContext'

export default () => {
  const [{ experience }, dispatch] = useContext(StoreContext)

  // Local state
  const [draftIndex, setDraftIndex] = useState(undefined)
  const [modalOpen, setModal] = useState(false)

  const onSave = async (entry) => {
    typeof draftIndex === 'undefined'
      ? await dispatch({ type: 'ADD_EXPERIENCE', payload: { entry } })
      : await dispatch({ type: 'UPDATE_EXPERIENCE', payload: { entry, index: draftIndex } })
    setModal(false)
  }

  const openModal = (i) => {
    setDraftIndex(i)
    setModal(true)
  }

  const getDraft = (i) => typeof i !== 'undefined' ? experience[i] : {}

  return (
    <Section title="MedlemsID" createHandler={() => openModal()}>
      {experience && experience.map((exp, i) => (
        <Box mt={-1} key={i}>
          <Typography variant="h6">
            {exp.title}
            <Button onClick={() => openModal(i)} variant="light" ml={2} size="sm">Edit</Button>
          </Typography>
        </Box>
      ))}
      <Modal opened={modalOpen} onClose={() => setModal(false)}>
        <ExperienceDraft experienceEntry={getDraft(draftIndex)} onClose={() => setModal(false)} onSave={onSave} />
      </Modal>
    </Section>
  )
}
