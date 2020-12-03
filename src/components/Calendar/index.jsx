import React from 'react';

import {Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
moment.locale('ru')
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles'

const localizer = momentLocalizer(moment);
const events = [
	{
		title: 'День Рождения',
		start: new Date('2020-12-16'),
		end:new Date('2020-12-16'),
		allDay: true
	},
	{
		title: 'Поездка в Екатеринбург',
		start: new Date('2020-12-20'),
		end:new Date('2020-12-20'),
		allDay: true
	},
	{
		title: 'Семинар с докладом',
		start: new Date('2020-12-25'),
		end:new Date('2020-12-26'),
		allDay: true
	},
	{
		title: 'Встреча нового года',
		start: new Date('2020-12-30'),
		end:new Date('2021-01-01'),
		allDay: true
	},

];

export const Calendar = props => (
	<div>
		<BigCalendar
			localizer={localizer}
			events={events}
			startAccessor='start'
			endAccessor='end'
			style={{height: 500}}
		/>
	</div>
);
