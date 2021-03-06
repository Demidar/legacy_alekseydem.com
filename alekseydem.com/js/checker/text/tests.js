var tests = {
	// массив с разделами
	sections: [
		// этот объект - первый элемент массива sections[0] - первый раздел
		{
			// имя раздела
			name: 'Раздел 1. Внедрение, инсталляция и настройка  программного обеспечения компьютерных систем',
			// описание раздела
			description: '',
			// задачи в разделе
			tasks: [
				// этот объект - первый элемент массива tasks[0] - первая задача в разделе
				{
					// тип задачи
					type: 'тест',
					// массив с вопросами и ответами
					questionAnswer: [
						{
							// вопрос к задаче
							question: 'Программное обеспечение подразделяется на',
							// варианты ответов к задаче, true - верный ответ
							answers: [
								['служебное, общее и разработчика', false],
								['операционные системы, утилиты, прикладное', false],
								['системное, прикладное и инструментальное', true]
							]
						},
						{
							question: 'управление внедрением включает в себя',
							answers: [
								['управление стоимостью', true],
								['управление сроками', true],
								['управление государством', false],
								['управление транспортным средством', false],
								['управление персоналом', false],
								['управление рисками', true],
								['управление бюджетом', false],
								['управление разработкой', false]
							]
						},
						{
							question: 'жизненный цикл программного обеспечения включает в себя этапы внедрения и сопровождения',
							answers: [
								['верно', true],
								['неверно', false]
							]
						},
						{
							question: 'разработка технического задания является этапом внедрения программного продукта на предприятии',
							answers : [
								['верно', true],
								['неверно', false]
							]
						}
					]
				},
				{
					type: 'вставить слова',

					text: '*$* - дефект в коде Продукта, в результате которого данный Продукт не способен работать в соответствии функциональными возможностями, указанными в предоставленной на него технической документации.\n\n *$* - оказываемые услуги по настройке, обслуживанию, адаптации и модификации Продуктов или устранению имеющихся в них ошибок, а также предоставлению обновлений и дополнительных программных модулей, иные действия\n\n *$* - это приведение программного обеспечения в соответствие с целями и задачами, для которых оно предназначено.\n\n *$* - программы или функции операционных систем, позволяющие получить удалённый доступ к компьютеру через Интернет или ЛВС и производить управление и администрирование удалённого компьютера в реальном времени.\n\n *$* - это дополнения к программному обеспечению, предотвращающие или устраняющие неполадки, повышающие безопасность либо улучшающие производительность компьютера. Настоятельно рекомендуется включать автоматическое\n\n *$* - набор обновлений, исправлений и/или улучшений компьютерной программы, поставляемый в виде единого установочного пакета. ',

					words: ['ошибка', 'техническая поддержка', 'администрирование программного обеспечения', 'программы удаленного администрирования', 'обновления', 'пакет обновления (service pack)']
				},
				{
					type: 'вставить слова',

					text: 'Образец договора технической поддержки программного обеспечения. \n\n1. Термины договора на сопровождение программ\n\n1.1. Продукты – предоставленное по *$* договору № __ от «__»___________ 201_ г. программное обеспечение. \n1.2. Техническая поддержка - оказываемые услуги по *$* Продуктов или устранению имеющихся в них ошибок, а также предоставлению обновлений и дополнительных программных модулей, иные действия предусмотренные в разделе 2 настоящего Договора.\n1.3. Ошибка - *$* в коде Продукта, в результате которого данный Продукт не способен работать в соответствии функциональными возможностями, указанными в предоставленной на него *$*, за исключением случаев:\n(1) нарушения Заказчиком *$* Продуктов в соответствии с требованиями предоставленной на них технической документации; \n(2) использования Продуктов на оборудовании или совместно с программным обеспечением, которые не были рекомендованы Исполнителем.\n\n2. Предмет договора техподдержки ПО\n\n2.1. Исполнитель обязуется оказывать по заявкам Заказчика услуги по Технической поддержке, а Заказчик принимать и оплачивать оказываемые Исполнителем услуги.\n2.2. Стороны согласовали возможность оказания услуг по Технической поддержке в следующем объеме и составе:\n\n* *$* Продуктов на оборудование Заказчика;\n\n* *$* Продуктов на оборудовании Заказчика, включая их адаптацию;\n\n* *$* Продуктов по отдельному заказу;\n\n* предоставление выпускаемых *$* Продуктов;\n\n* *$* в Продуктах;\n\n* *$* по порядку использования Продуктов.\n\n2.3. Услуги по Договору оказываются в соответствии с *$* (SLA), являющимся неотъемлемой частью настоящего Договора.',

					words: ['Лицензионному', 'настройке, обслуживанию, адаптации и модификации', 'дефект', 'технической документации', 'правил эксплуатации', 'установка', 'настройка', 'модификация', 'обновлений', 'устранение ошибок', 'консультирование', 'Соглашением об уровне услуг']
				},
				{
					type: 'вставить слова',

					text: 'Внедрение программного обеспечения — процесс *$* программного обеспечения под определенные условия использования, а также *$* работе с программным продуктом. \n\nВнедрение программного продукта состоялось в том случае, если *$*, а сотрудники компании *$*. \n\nРезультатом проекта внедрения должен быть прозрачный, четко регламентированный, документированный и автоматизированный *$*.\n\nОсновные этапы внедрения программного продукта:\n1.*$* \n2.*$* \n3.*$* \n4.*$* \n5.*$* \n6.*$* \n\nЭффекты от внедрения можно разделить на две большие категории: эффект, получаемый на *$* уровне, т.е. на уровне бизнеса, и *$* эффект, который получат все участники процесса. \n1.*$*: \n\n* обеспечение прозрачности и измеряемости достижения стратегических целей; \n\n* снижение вероятности проявления рисков в сфере информационных технологий; \n\n* повышение рентабельности IT-услуг за счет снижения сроков проведения проекта, снижения издержек поддержки и т.д.; \n\n* повышение инвестиционной привлекательности IT-проектов; \n\n* повышение доверия бизнеса к IT за счет качественно обработанных запросов IT-отделами от бизнеса. \n\n2.*$*: \n\n* уменьшение сроков и снижение стоимости обработки новых запросов; \n\n* улучшение качества IT-услуг – это вовремя выполненные работы с заранее определенным качеством; \n\n* увеличение эффективности используемых ресурсов – хорошо организованный и формализованный процесс позволяет четко определить роли и ответственности каждого участника этого процесса; \n\n* более четкое и реалистичное планирование; \n\n* значительное уменьшение времени на принятие решения; \n\n* снижение влияния человеческого фактора.',

					words: ['настройки', 'обучения пользователей', 'программный продукт выполняет поставленную задачу', 'полностью перешли на работу с новым продуктом', 'процесс разработки и сопровождения', 'Обследование', 'Разработка технического задания', 'Настройка системы (программного продукта)',  'Тестирование системы', 'Опытная эксплуатация', 'Промышленная эксплуатация', 'стратегическом', 'тактический', 'стратегическом', 'тактический']
				}
			]
		},
		{
		name: 'Раздел 2. Сопровождение  программного обеспечения компьютерных систем',

		description: '',

		tasks: [
			{
				type: 'вставить слова',

				text: 'Сопровожде́ние (поддержка) программного обеспечения — процесс *$*, *$* и устранения *$* программного обеспечения (ПО) после передачи в *$* . \n\nСопровождение ПО — это одна из фаз жизненного цикла программного обеспечения, следующая за фазой передачи ПО в *$*. \n\nОпределение процесса сопровождения:\n\n•SWEBOK: Сопровождение ПО – вся совокупность деятельности, необходимой для обеспечения *$* программных систем.\n\n•IEEE 1219 (Standard for Software Maintenance): Сопровождение ПО – *$* программного продукта после передачи в *$* для устранения сбоев, *$* показателей производительности и/или других *$* (атрибутов) продукта, или *$* продукта для использования в модифицированном окружении.\n\n•ГОСТ Р ИСО/МЭК 12207: Сопровождение – *$* программного продукта в части его кода и документации для решения возникающих проблем при эксплуатации или реализации потребностей в улучшениях тех или иных *$* продукта.\n\nСопровождение поддерживает функционирование программного продукта на протяжении всего операционного жизненного цикла, то есть периода его *$*.\nВ процессе сопровождения фиксируются и отслеживаются запросы на *$* (также называемые “запросами на изменения” – change requests, в частности, в контексте конфигурационного управления), оценивается влияние предлагаемых изменений, производится *$* кода и других активов (артефактов) продукта, проводится необходимое тестирование и, наконец, выпускается обновленная версия продукта. Кроме того, проводится обучение пользователей и обеспечивается их ежедневная поддержка при работе с текущей версией продукта.',

				words: ['улучшения', 'оптимизации', 'дефектов', 'эксплуатацию', 'эксплуатацию', 'эффективной поддержки', 'модификация', 'эксплуатацию', 'улучшения', 'характеристик', 'адаптации', 'процесс модификации', 'характеристик', 'адаптации', 'эксплуатацию', 'модификация']
			},
			{
				type: 'вставить слова',

				text: 'модификация программного продукта на этапе эксплуатации для идентификации и предотвращения скрытых дефектов до того, когда они приведут к реальным сбоям - *$* \n\nмодификация программного продукта на этапе эксплуатации для обеспечения продолжения его использования с заданной эффективностью в изменившемся или находящемся в процессе изменения окружении - *$* \n\nмодификация программного продукта на этапе эксплуатации для повышения характеристик производительности и удобства сопровождения - *$* \n\n“реактивная” модификация программного продукта, выполняемая уже после передачи в эксплуатацию для устранения сбоев - *$*',

				words: ['Профилактическое сопровождение (preventive maintenance)', 'Адаптирующее сопровождение (adaptive maintenance)', 'Совершенствующее сопровождение (perfective maintenance)', 'Корректирующее сопровождение (corrective maintenance)']
			},
			{
				type: 'тест',

				questionAnswer: [
					{
						question: 'Что такое критический путь:',
						answers: [
							['Путь, сложенный из резервов операций.', false],
							['Путь, который нужно пройти в первую очередь', false],
							['Путь, не имеющий временных резервов', true]
						]
					},
					{
						question: 'Смета есть:',
						answers: [
							['Оценка работ проекта в денежных единицах', true],
							['Распределение затрат проекта во времени', false],
							['Оценка единичной стоимости ресурсов', false]
						]
					},
					{
						question: 'Базовый план по стоимости есть:',
						answers: [
							['Оценка работ проекта в денежных единицах.', false],
							['Распределение затрат проекта во времени.', true],
							['Оценка количества ресурсов и их единичной стоимости', false]
						]
					},
					{
						question: 'Простой отчет о состоянии работ 50/50:',
						answers: [
							['Дает денежный кредит 50% на выполнение работ.', false],
							['Обозначает одно из двух состояний – работа начата и работа завершена.', true],
							['Устанавливает точный процент выполнения работ в 50%.', false]
						]
					},
					{
						question: 'Освоенный объем EV есть:',
						answers: [
							['Плановая стоимость фактически выполненных работ на контрольную дату.', true],
							['Фактическая стоимость выполненных работ на контрольную дату.', false],
							['Плановая стоимость запланированных работ на контрольную дату.', false]
						]
					},
					{
						question: 'Индекс выполнения стоимости равен 0,78. Это означает:',
						answers: [
							['Скорость выполнения проекта составляет 0,78 от запланированной.', false],
							['Потрачено 78% средств бюджета проекта.', false],
							['Проект получает 78 копеек с каждого вложенного рубля.', true]
						]
					},
					{
						question: 'Индекс выполнения сроков 87% означает:',
						answers: [
							['Выполняется 87% запланированного объема.', true],
							['Проект будет задержан по времени на 87%.', false],
							['По завершению проекта выполним лишь 87% объема.', false]
						]
					},
					{
						question: 'Прогноз по завершении 27350 руб. означает:',
						answers: [
							['Общую стоимость проекта.', false],
							['Если работать с текущей эффективностью, то общая стоимость проекта составит 27350 руб.', true],
							['Сумма 27350 руб. будет превышена по завершению проекта.', false]
						]
					},
					{
						question: 'Согласно методу анализа освоенного объема, проект считается завершенным когда:',
						answers: [
							['BAC=PV.', false],
							['BAC=EV.', true],
							['BAC=AC.', false]
						]
					},
					{
						question: 'При вычислении прогноза по завершении EAC предполагается, что:',
						answers: [
							['BAC изменится к концу проекта.', false],
							['Индекс выполнения стоимости CPI не изменится до конца проекта.', true],
							['Индекс выполнения сроков SPI не изменится до конца проекта.', false]
						]
					}
				]
			},
			{
				type: 'тест',

				questionAnswer: [
					{
						question: 'В течение каких фаз проекта будут определены риски:',
						answers: [
							['Инициации и исполнения', false],
							['Исполнения', false],
							['Всех фаз', true]
						]
					},
					{
						question: 'Риски присутствуют в проектах из-за:',
						answers: [
							['Неадекватной толерантности исполняющей организации к рискам.', false],
							['Неопределенностей относительно желаемого результата.', true],
							['Из-за невозможности защитить проект извне.', false]
						]
					},
					{
						question: 'На выходе какого процесса получается список выявленных рисков:',
						answers: [
							['Планирование управления рисками.', false],
							['Идентификация рисков.', true],
							['Качественный анализ рисков.', false]
						]
					},
					{
						question: 'Стратегия, позволяющая выполнить некоторые действия и не учитывать риск впоследствии, называется:',
						answers: [
							['Уклонение от риска.', true],
							['Принятие риска.', false],
							['Передача риска', false]
						]
					},
					{
						question: 'Триггером риска – симптомом, сигнализатором риска не может быть:',
						answers: [
							['Задержка выполнения нескольких операций.', false],
							['Повторяющиеся однотипные дефекты.', false],
							['Предсказание члена команды.', true]
						]
					},
					{
						question: 'Затраты на не идентифицированные риски учитываются в статье:',
						answers: [
							['Управленческий резерв.', true],
							['Бюджет на непредвиденные обстоятельства.', false],
							['Фонд управления рисками.', false]
						]
					},
					{
						question: 'Способ обнаружения рисков, основанный на выявлении хороших и плохих внешних и внутренних факторов исполняющей организации, называется:',
						answers: [
							['Метод Дельфи.', false],
							['SWOT-анализ.', true],
							['Анализ документации', false]
						]
					},
					{
						question: 'Матрица вероятности и последствий используется для:',
						answers: [
							['Анализа чувствительности рисков.', false],
							['Вычисления ожидаемых значений рисков.', false],
							['Качественного ранжирования рисков по уровням.', true]
						]
					},
					{
						question: 'Вычисление ожидаемого значения риска и принятие решения в условиях влияния нескольких факторов, называется:',
						answers: [
							['Дерево решений.', true],
							['Ожидаемое значение.', false],
							['Графические методы.', false]
						]
					}
				]
			}
		]
		},
		{
		name: 'Раздел 3. Организация защиты программного обеспечения компьютерных систем',
		description: '',
		tasks: [
			{
				type: 'тест',

				questionAnswer: [
					{
						question: 'Все множество потенциальных угроз безопасности информации может быть разделено на два класса',
						answers: [
							['преднамеренные угрозы', true],
							['угрозы заражения вирусами', false],
							['случайные угрозы', true],
							['угрозы утечки информации', false],
							['угрозы воздействия злоумышленников', false]
						]
					},
					{
						question: 'Программные продукты и базы данных должны быть защищены по нескольким направлениям от воздействия:',
						answers: [
							['аппаратуры', true],
							['прямых солнечных лучей', false],
							['природных явлений', false],
							['специализированных программ', true],
							['человека', true],
							['перепадов электричества', false]
						]
					},
					{
						question: 'Злоумышленником может быть:',
						answers: [
							['злоумышленник', false],
							['разработчик', true],
							['охранник', false],
							['пользователь', true],
							['преступник', false],
							['заказчик', false],
							['сотрудник из числа обслуживающего персонала', true],
							['постороннее лицо', true]
						]
					},
					{
						question: 'В зависимости от механизма действия вредительские программы делятся на классы:',
						answers: [
							['компьютерные вирусы', true],
							['троянские кони', true],
							['логические бомбы', true],
							['блокировщики', false],
							['бомбы замедленного действия', false],
							['ураганы', false],
							['черви', true],
							['вредители', false]
						]
					},
					{
						question: 'Модель угроз это',
						answers: [
							['математическая модель последствий воздействия злоумышленника', false],
							['документ, тем или иным способом описывающий возможные угрозы безопасности персональных данных', true],
							['перечень всех документов программного продукта, предусмотренных ГОСТ', false],
							['составление описательного портрета возможного злоумышленника', false]
						]
					},
					{
						question: 'Модель угроз верхнего уровня предназначена для',
						answers: [
							['описания портрета возможного злоумышленника', false],
							['для определения требуемого уровня криптографической защиты.', false],
							['определения характеристик безопасности защищаемых персональных данных и других объектов защиты', true]
						]
					},
					{
						question: 'Под программной закладкой будем понимать',
						answers: [
							['совокупность операторов и (или) операндов, преднамеренно в завуалированной форме включаемую в состав выполняемого кода на любом этапе его разработки, которые по сигналу или в установленное время приводятся в действие, уничтожая или искажая информацию, или дезорганизуя работу программно-технических средств.', true],
							['преднамеренное завуалированное искажение какой-либо части алгоритма, либо построение его таким образом, что в результате будут иметься ограничения на выполнение требуемых функций, или они вовсе не будут не выполняться.', false],
							['непреднамеренное искажение какой-либо части алгоритма, либо построение его таким образом, что в результате будут искажено выполнение требуемых функций, заданных спецификацией, или они вовсе не будут не выполняться.', false]
						]
					},
					{
						question: 'К разрушающим программным средствам относят',
						answers: [
							['программы блокировки', false],
							['программы дефрагментации', false],
							['способы и средства, позволяющие внедрять компьютерные вирусы и программные закладки в компьютерные системы и управлять ими на расстоянии.', true],
							['программы очистки диска', false],
							['программные закладки', true],
							['компьютерные вирусы', true]
						]
					},
					{
						question: 'Детализированная модель угроз предназначена для',
						answers: [
							['определения требуемого уровня криптографической защиты', true],
							['определения характеристик безопасности защищаемых персональных данных и других объектов защиты', false],
							['описания портрета возможного злоумышленника', false]
						]
					},
					{
						question: 'Под алгоритмической закладкой понимают',
						answers: [
							['преднамеренное завуалированное искажение какой-либо части алгоритма, либо построение его таким образом, что в результате будут иметься ограничения на выполнение требуемых функций, или они вовсе не будут не выполняться.', true],
							['непреднамеренное искажение какой-либо части алгоритма, либо построение его таким образом, что в результате будут искажено выполнение требуемых функций, заданных спецификацией, или они вовсе не будут не выполняться.', false],
							['совокупность операторов и (или) операндов, преднамеренно в завуалированной форме включаемую в состав выполняемого кода программного компонента на любом этапе его разработки.', false]
						]
					}
				]
			},
			{
				type: 'вставить слова',

				text: 'Методы доказательства правильности программ могут быть применены для *$* ПО при существенных ограничениях на размеры и сложность создаваемых программ. Поэтому в частных случаях они могут оказаться более эффективными, чем другие известные методы анализа программ, которые исследуются в следующих разделах данной работы.\nМетоды, используемые для анализа и оценки безопасности ПО, разделяют на две категории: *$* и *$*. В основу данного разделения положены принципиальные различия в точке зрения на исследуемый объект (программу). \n*$* методы анализа рассматривают РПС через призму фиксации факта нарушения безопасного состояния системы, \nа *$* - через призму доказательства наличия отношения эквивалентности между моделью исследуемой программы и моделью РПС.\n*$* делятся на те, в которых контролируется процесс выполнения программы и те, в которых отслеживаются изменения в операционной среде, к которым приводит запуск программы.\nПри проведении анализа безопасности с помощью *$* методов строится модель программы и формально доказывается эквивалентность модели исследуемой программы и модели РПС. В простейшем случае в качестве модели\nВ целом полный процесс анализа ПО включает в себя три вида анализа:\n* *$* ;\n* *$* ;\n* *$* .\nКаждый из видов анализа представляет собой законченное исследование программ согласно своей специализации.\nРезультаты исследования могут иметь как самостоятельное значение, так и коррелироваться с результатами полного процесса анализа.\n*$* предполагает поиск распознавания и классификацию различных лексем объекта исследования (программа), представленного в исполняемых кодах. При этом лексемами являются сигнатуры. В данном случае осуществляется поиск сигнатур следующих классов:\n* сигнатуры вирусов;\n* сигнатуры элементов РПС;\n* сигнатуры (лексемы) "подозрительных функций";\n* сигнатуры штатных процедур использования системных ресурсов и внешних устройств. \nПоиск лексем (сигнатур) реализуется с помощью специальных программ-сканеров.\n*$* предполагает поиск, распознавание и классификацию синтаксических структур РПС, а также построение структурно-алгоритмической модели самой программы.\nРешение задач поиска и распознавания синтаксических структур РПС имеет самостоятельное значение для верификационного анализа программ, поскольку позволяет осуществлять поиск элементов РПС, не имеющих сигнатуры. Структурно-алгоритмическая модель программы необходима для реализации следующего вида анализа - семантического.\n*$* предполагает исследование программы изучения смысла составляющих ее функций (процедур) в аспекте операционной среды компьютерной системы. В отличие от предыдущих видов анализа, основанных на статическом исследовании, семантический анализ нацелен на изучение динамики программы - ее взаимодействия с окружающей средой. Процесс исследования осуществляется в виртуальной операционной среде с полным контролем действий программы и отслеживанием алгоритма ее работы по структурно-алгоритмической модели.\n*$* является наиболее эффективным видом анализа, но и самым трудоемким. По этой причине методика сочетает в себе три перечисленных выше анализа. Выработанные критерии позволяют разумно сочетать различные виды анализа, существенно сокращая время исследования, не снижая его качества.',
				words: ['анализа безопасности', 'контрольно-испытательные', 'логико-аналитические', 'контрольно-испытательные', 'логико-аналитические', 'контрольно-испытательные', 'логико-аналитические', 'лексический верификационный анализ', 'синтаксический верификационный анализ', 'семантический анализ программ', 'лексический верификационный анализ', 'синтаксический верификационный анализ', 'семантический анализ программ', 'семантический анализ программ']
			},
			{
				type: 'вставить слова',

				text: '*$* - автономно функционирующая программа, обладающая способностью к самостоятельному внедрению в тела других программ и последующему самовоспроизведению и самораспространению в информационно-вычислительных сетях и отдельных ЭВМ\n\n*$* называют несегментированными\n\n*$* - вирусы, заражающие программы, хранящиеся в системных областях дисков.\n\n*$* - вирусы, заражающие файлы с программами\n\n*$* - вирусы, которые выполняются только в момент запуска зараженной программы\n\n*$* - это часть вируса, расположенная в тексте зараженной программы отдельно от головы\n\n*$* - это его компонента, получающая управление первой\n\n*$* называют сегментированными\n\n*$* - вирусы, которые после активизации постоянно находятся в оперативной памяти компьютера и контролируют доступ к его ресурсам',

				words: ['компьютерный вирус', 'вирусы, состоящие из одной головы', 'загрузочные (бутовые) вирусы', 'файловые вирусы', 'транзитные вирусы', 'хвост вируса', 'голова вируса', 'вирусы, содержащие голову и хвост', 'резидентные вирусы']
			},
			{
				type: 'вставить слова',

				text: 'Вставляйте ответы в соответствии с порядковым номером.\n\nЗагрузочные вирусы подразделяются на вирусы, заражающие:\n*$*\n*$*\n\nMtE-вирусы делятся на \n*$*\n*$*\n\nПо степени и способу маскировки:\n*$*\n*$*\n*$*\n\nВ свою очередь файловые вирусы подразделяются на вирусы, заражающие:\n*$*\n*$*\n*$*\n*$*\n*$*\n',

				words: ['1. внесистемный загрузчик, расположенный в загрузочном секторе жестких дисков', '2. системный загрузчик, расположенный в загрузочном секторе дискет и логических дисков', '1. обычные вирусы-мутанты, в разных копиях которых различаются только зашифрованные тела, а расшифровщики совпадают', '2. полиморфные вирусы, в разных копиях которых различаются не только зашифрованные тела, но их дешифровщики', '1. вирусы-мутанты (MtE-вирусы) - вирусы, содержащие в себе алгоритмы шифрования, обеспечивающие различие разных копий вируса', '2. stealth-вирусы - вирусы, пытающиеся быть невидимыми на основе контроля доступа к зараженным элементам данных', '3. вирусы, не использующие средств маскировки', '1. исполняемые файлы', '2. составляемые на макроязыках программирования, или файлы, содержащие макросы (макровирусы)', '3. файлы с драйверами устройств', '4. командные файлы и файлы конфигурации', '5. файлы с библиотеками исходных, объектных, загрузочных и оверлейных модулей, библиотеками динамической компоновки и т.п']
			}
		]
		}
	]
	
	
};

var current = {
	section: null,
	numSection: null,
	task: null,
	numTask: null,
	// для "тест"
	question: null,
	// для "тест"
	numQuestion: null,
	// для "тест"
	variety: null,
	// для "тест"
	numVariety: null,
	// для "вставить слова"
	numWordPlace: null,
	// для "вставить слова"
	countWordPlaces: null
};