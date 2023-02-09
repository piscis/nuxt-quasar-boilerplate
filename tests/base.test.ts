import { describe, expect, it } from 'vitest'
import { $fetch, isDev } from '@nuxt/test-utils'

describe('Base', () => {
  it('index page is callable', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('DOCTYPE')
  })

  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
    })
  }
})
