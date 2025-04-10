---
title: Техподдержка авторов/школ
---

:::note
В сделках Б24 организована очередь обработки запросов от рекламодателей.<br>
https://info-hit.bitrix24.ru/crm/deal/kanban/category/32/
:::

## Источники тикетов
1. Телеграм бот https://t.me/ih_school_support_bot
2. Открытая линия "Техподдержка Инфохит (для авторов/школ)"
3. Почта b2b@info-hit.ru

## Как создается новый тикет
1. В настройках открытых линий установлено поле "В какой воронке создавать сделку" в значение IH: Техподдержка авторов
2. В настройках почты установлена поле "Создавать новый лид" с источником "Email b2b@info-hit.ru"
   - При создании лида запускается шаблон<br>https://info-hit.bitrix24.ru/crm/configs/bp/CRM_LEAD/edit/42/
   - При соблюдении условия "источник = Email b2b@info-hit.ru" создается новая сделка в воронке "IH: Техподдержка авторов"

## Как поменять ответственного для техподдержки авторов/школ
1. Меняем ответственного в настройках открытой линии<br>https://info-hit.bitrix24.ru/contact_center/connector/?ID=livechat&LINE=24&action-line=create — Нажать "настроить"
2. Меняем ответственного в настроках почты<br>https://info-hit.bitrix24.ru/mail/config/edit?id=86#configcrm

:::caution[Важно]
В настройках открытой линии и настройках почты есть возможность задавать не конкретных сотрудников, а сотрудников определенного отдела компании.

В настройках формы CRM можно задать ответственным только одного конкретного сотрудника.
:::
