# Myte-Factory5

Пропускная система регистрирует все входы и выходы сотрудников.

Данные представлены в виде коллекции

[

{ "date": "2019-04-02T08:15:23.823Z", "id": 0, "type": "in" },

{ "date": "2019-04-02T08:15:23.823Z", "id": 4, "type": "out" }

{ "date": "2019-04-02T08:15:24.911Z", "id": 1, "type": "in" },

{ "date": "2019-04-02T08:15:24.911Z", "id": 5, "type": "out" },

{ "date": "2019-04-02T08:15:37.733Z", "id": 2, "type": "in" },

{ "date": "2019-04-02T08:15:37.733Z", "id": 6, "type": "out" },

{ "date": "2019-04-02T08:15:54.910Z", "id": 3, "type": "in" },

{ "date": "2019-04-02T08:15:54.910Z", "id": 7, "type": "out" }

]

где id - уникальный номер сотрудника

date - дата и время прохода в формате unix-timestamp

type - тип прохода: in - вход в здание, out - выход

Задача

Написать функцию, выводящую список сотрудников с указанием суммарно проведенного времени в часах в здании за определенный период, а также флаг о наличии подозрительных проходов (выход без входа и нахождение в здании с 23:00 – 6:00)

Пример функцииconst buildVisitStatistics = (data, dateStart, dateEnd) => {...}

где:

data - коллекция зарегистрированных проходов

dateStart - начало периода

dateEnd - конец

Пример результата выполнения функции

[

{ id: 0, time: 21.5, hasSuspiciousVisits: false },

{ id: 1, time: 51.2, hasSuspiciousVisits: false },

{ id: 2, time: 31.1, hasSuspiciousVisits: true }

]
