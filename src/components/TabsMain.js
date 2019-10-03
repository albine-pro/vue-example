export const tabs = [							
  {							
    name: 'Day', 						
    component: {	
        props:['miles_active'], 							
		template: `
	      <div>
			   <div class="miles_block">
					<div 
						class="miles_block__sub"
			            v-for="miles_per_day in miles_active.day"
					>
						<div class="miles_block__sub__line"></div>
						<div class="miles_block__sub__cover" :style="{ height: miles_per_day + '%' }"></div>	
									
					</div>
				</div>
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
        props:['miles_active'],  							
		template: `
	      <div>
		   <div class="miles_block">
				<div 
					class="miles_block__sub"
		            v-for="miles_per_week in miles_active.week"
				>
					<div class="miles_block__sub__line"></div>
					<div class="miles_block__sub__cover" :style="{ height: miles_per_week + '%' }"></div>	
								
				</div>
			</div>
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
        props:['miles_active'], 	 							
		template: `
	      <div>
		   <div class="miles_block">
				<div 
					class="miles_block__sub"
		            v-for="miles_per_month in miles_active.month"
				>
					<div class="miles_block__sub__line"></div>
					<div class="miles_block__sub__cover" :style="{ height: miles_per_month + '%' }"></div>	
								
				</div>
			</div>
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