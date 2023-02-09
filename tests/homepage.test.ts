import { beforeAll, describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Homepage', () => {
  let doc: any
  beforeAll(async () => {
    doc = await $fetch('/')
  })
  it.skip('Renders the experince section', async () => {
    expect(doc).toContain('Experience')
  })
})
