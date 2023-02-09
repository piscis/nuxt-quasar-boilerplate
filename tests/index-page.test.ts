import { beforeAll, describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Index Page', () => {
  let doc: any
  beforeAll(async () => {
    doc = await $fetch('/')
  })
  it('Renders the index page with a hello button', async () => {
    expect(doc).toContain('q-btn__content')
    expect(doc).toContain('HELLO')
  })
})
