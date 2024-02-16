import { IconGithub } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function HomeFooter() {
  return (
    <footer className='z-30 w-full border-t border-neutral-200 bg-white transition-colors dark:border-neutral-800 dark:bg-neutral-950'>
      <div className='mx-auto flex h-14 w-full max-w-screen-xl items-center justify-between px-6 md:px-20'>
        <p className='text-sm text-neutral-500 dark:text-neutral-400'>
          Forked{' '}
          <a
            className='font-bold text-black dark:text-neutral-200'
            href='https://xlug.vercel.app/github'
            target='_blank'
            rel='noreferrer'
          >
            Will's Repo
          </a>
        </p>
        <a
          className='flex items-end text-neutral-900 dark:text-white'
          href={siteConfig.links.github}
          target='_blank'
          rel='noreferrer'
          aria-label='Source code of the project'
        >
          <IconGithub size={24} />
        </a>
      </div>
    </footer>
  )
}
