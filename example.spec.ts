import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import App from '@/app.vue'

it('my test', async () => {
  const component = await mountSuspended(App)
  expect(component.text()).toContain('Welcome to Nuxt!')
})
