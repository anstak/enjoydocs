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
                  title : 'Создайте свой первый опрос',
                  to : '/first_survey/'
                },
                {
                  title : 'Доступная аудитория',
                  to : '/auditory/'
                },
                {
                  title : 'Доступные типы опросов',
                  to : '/surveys/'
                },
                {
                  title : 'Конструктор опроса',
                  to : '/survey_constructor/'
                },
                {
                  title : 'Доступные типы вопросов',
                  to : '/questions/'
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
                  title : 'Опросные квоты и фильтры',
                  to : '/quotas/'
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
