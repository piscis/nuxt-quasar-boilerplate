import { beforeAll, describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Complicated Page', () => {
  let doc: any
  beforeAll(async () => {
    doc = await $fetch('/complicated')
  })
  it('Renders a hello button', async () => {
    expect(doc).toContain('q-btn__content')
    expect(doc).toContain('HELLO')
  })

  it('Renders a navbar', async () => {
    expect(doc).toContain('q-toolbar')
  })

  it('Renders a header', async () => {
    expect(doc).toContain('q-header')
  })

  it('Renders a container', async () => {
    expect(doc).toContain('q-drawer-container')
  })
})
