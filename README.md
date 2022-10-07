# genetic-algorithm

Шаблон для спецпроекта (Vue, Vite, Pinia, SCSS, Sentry)

## Как использовать 
1. Форкнуть репозиторий в группу special
2. Сделать unfork у нового репозитория 
3. Поменять name и path у нового репозитория
4. Сделать поиск по проекту по genetic-algorithm и заменить все совпадения на название нового проекта
5. Добавить в SETTINGS -> CI/CD -> Variables (name: FRONTEND_GITLAB_PACKAGE_REGISTRY_TOKEN, value: $CI_JOB_TOKEN). Пример: https://git.sports.ru/special/templates/genetic-algorithm/-/settings/ci_cd
6. Создать новый проект в [Sentry](https://sentry.sports.ru/sports_ru/) в команде special и обновить dsn (появится после создания проекта)


## Деплой
Продакшен версия деплоится из ветки master и доступна на https://specials.sports.ru/genetic-algorithm/

Стейдж версия деплоится из ветки dev и доступна на https://specials.sports.ru/demo/genetic-algorithm/
