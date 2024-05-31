import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar : {
          'Главное меню': [
            {
              title: "Документация EnjoySurvey",
              items: [
                {
                  title : 'Справка',
                  to : '/reference/',
                },
                {
                  title : 'Доступные типы опросов',
                  to : '/surveys/'
                },
                {
                  title : 'Настройки вопросов',
                  to : '/settings/'
                },
                {
                  title : 'Скринер',
                  to : '/screener/'
                },
                {
                  title : 'Сбор ответов',
                  to : '/collecting/'
                },
                {
                  title : 'Результаты',
                  to : '/results/'
                }
              ]
            }
          ]
        },
        logo: 'https://enjoysurvey.ru/assets/images/static/logo.svg?ef55cb8c',
        i18n: {
          onThisPage: 'На странице'
        }
      }),
      siteConfig: {
        title: 'Enjoy Survey',
        description: 'Enjoy Survey Documentations',
      },
    }),
  ],
})

export default config
