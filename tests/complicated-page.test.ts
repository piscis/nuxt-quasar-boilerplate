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

  it('complicated quasar layout gets rendered with quasar styles applied', async () => {
    const page = await createPage('/complicated')
    const buffer = await page.screenshot()
    expect(buffer).toMatchImageSnapshot({
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    })
  })

  it('should render complicated page in dark mode', async () => {
    const page = await createPage('/complicated?dark=1')
    const buffer = await page.screenshot()
    expect(buffer).toMatchImageSnapshot({
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    })
  })
})
