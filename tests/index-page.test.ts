import { beforeAll, describe, expect, it } from 'vitest'
import { $fetch, createPage } from '@nuxt/test-utils'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R
    }
  }
}

expect.extend({ toMatchImageSnapshot })

describe('Index Page', () => {
  let doc: any
  beforeAll(async () => {
    doc = await $fetch('/')
  })
  it('Renders the index page with a hello button', async () => {
    expect(doc).toContain('q-btn__content')
    expect(doc).toContain('HELLO')
  })

  it('Info box gets rendered with quasar styles applied', async () => {
    const page = await createPage('/')
    const buffer = await page.screenshot()
    expect(buffer).toMatchImageSnapshot({
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    })
  })
})
