import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Gallery',
  icon: 'i-lucide-gallery-horizontal-end',
  to: '/gallery'
}, {
  label: 'Services',
  icon: 'i-lucide-tool-case',
  to: '/services'
}, {
  label: 'Contact',
  icon: 'i-lucide-mic',
  to: '/contact'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}]
