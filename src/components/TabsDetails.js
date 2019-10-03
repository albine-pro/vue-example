export const tabs = [							
  {							
    name: 'Day', 						
    component: {								
		template: `
	      <div>
				<div class="tab__time">
					<div class="title">1pm</div>
					<div class="title">2pm</div>
					<div class="title">3pm</div>
					<div class="title">4pm</div>
					<div class="title">5pm</div>
					<div class="title">6pm</div>
				</div>
	      </div>`
    	 } 												
  },							
  {							
    name: 'Week',							
    component: {	 							
		template: `
	      <div>
			<div class="tab__time">
				<div class="title">S</div>
				<div class="title">M</div>
				<div class="title">T</div>
				<div class="title">W</div>
				<div class="title">T</div>
				<div class="title">F</div>
				<div class="title">S</div>
			</div>
	      </div>`
    	 } 							
  },							
  {							
    name: 'Month',														
    component: { 							
		template: `
	      <div>
			<div class="tab__time">
				<div class="title">1</div>
				<div class="title">5</div>
				<div class="title">10</div>
				<div class="title">15</div>
				<div class="title">20</div>
				<div class="title">25</div>
				<div class="title">30</div>
			</div>
	      </div>`
    	 } 							
    }													
]