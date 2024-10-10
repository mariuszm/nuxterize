import App from '@/app.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'

it('my test', async () => {
  const component = await mountSuspended(App)
  expect(component.text()).toContain('Welcome to Nuxt!')
})
