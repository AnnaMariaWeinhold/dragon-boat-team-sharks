import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {createClient} from '@sanity/client'

export const client = createClient({
  name: 'default',
  title: 'dragon-boat-team-sharks',

  projectId: '859nuz9q',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
