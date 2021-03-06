	$(document).ready(function() {
	$('#informations').hide();
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	var id_formations = 10;

	
	$('#calendar').fullCalendar({
		//
		//height: 800,
		// 
		monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
		monthNamesShort: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		buttonText: {	
			prev: '&nbsp;&#9668;&nbsp;',
			next: '&nbsp;&#9658;&nbsp;',
			prevYear: '&nbsp;&lt;&lt;&nbsp;',
			nextYear: '&nbsp;&gt;&gt;&nbsp;',
			today: 'Aujourd\'hui',
			month: 'Mois',
			week: 'Semaine',
			day: 'Jour'
		},
		// 
		header: {
			left: 'prev,next today',
			center: 'title',
			right: '', /* Suppression de l'onglet Semaine (agendaWeek) */
			//left:''
		},
		// 
		slotMinutes:30,
		// 
		defaultView: 'agendaWeek',
		// 
		editable: true,
		// 
		titleFormat: {
			week: "MMMM yyyy"
		},
		// 
		columnFormat: {
			week: "dddd d"
		},
		// 
		timeFormat: { 
			week: 'H:mm{ - H:mm}'
		},
		// 
		allDayText: '',
		// 
		axisFormat: 'HH:mm',
		// 
		firstDay:1,
		// 
		minTime:7,
		// 
		maxTime:21,
		// 
			
		editable:false,
		// 
		disableDragging: true
	});
});
