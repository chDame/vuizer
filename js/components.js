window.defaultcomponents = {
	customWidgets: [],
	containers: [
		{
			'type':'contentWidget',
			'nature': 'panel-element',
			'display': 'Panel',
			'sizeable': false,
			'icon' : 'rowwidget',
			'template': '<div class="card">'+
			  '<div class="card-header">{{props.title}}</div>'+
			  '<div class="card-body">'+
				'<form-content :content="props.content" classname="row"></form-content>'+
			  '</div>'+
			'</div>',
			'propsDef':[{
				'name':'title',
				'type': 'text',
				'default':'panel'
			}]
		},
		{
			'type':'contentWidget',
			'nature': 'row-element',
			'template': '<form-content :content="props.content" classname="row"></form-content>',
			'propsDef':[]
		}
	],
	widgets: [
		{ 
			'type':'widget',
			'nature': 'input-element',
			'display': 'Input',
			'sizeable': true,
			'icon' : 'bi bi-input-cursor-text',
			'template': "<div><div class='mb-3' v-if='!props.icon'><label :for='props.id' class='form-label'>{{props.label}}</label><input :id='props.id' :type='props.type' class='form-control' :placeholder='props.placeholder' v-model='props.value'></input></div>"+
					"<label v-if='props.icon' :for='props.id' class='form-label'>{{props.label}}</label><div v-if='props.icon' class='input-group mb-3'><span class='input-group-text'><i :class='props.icon'/></span><input :type='props.type' class='form-control' :id='props.id':placeholder='props.placeholder' v-model='props.value'></div></div>",
			'propsDef':[
				{
					'name':'required',
					'type': 'boolean',
					'default':true
				},
				{
					'name':'disabled',
					'type': 'boolean',
					'default':false
				},
				{
					'name':'type',
					'type': 'list',
					'values' : ['text', 'number', 'email', 'password'],
					'default':'text'
				},
				{
					'name':'icon',
					'type': 'text',
					'default' : 'bi bi-input-cursor-text'
				},
				{
					'name':'label',
					'type': 'text',
					'default' : 'label :',
				},
				{
					'name':'value',
					'type': 'binding'
				},
				{
					'name':'labelPosition',
					'type': 'list',
					'values' : ['top', 'left'],
					'default': 'top'
				},
				{
					'name':'placeholder',
					'type': 'text',
					'default':'placeholder'
				},
				{
					'name':'min',
					'type': 'number',
					'condition':'field.props.type=="number"'
				},
				{
					'name':'max',
					'type': 'number',
					'condition':'field.props.type=="number"'
				},
				{
					'name':'minlength',
					'type': 'number',
					'condition':'field.props.type!="number"'
				},
				{
					'name':'maxlength',
					'type': 'number',
					'condition':'field.props.type!="number"'
				}
			]					
		},
		{ 
			'type':'widget',
			'nature': 'checkbox-element',
			'display': 'CheckBox',
			'sizeable': true,
			'icon' : 'bi bi-check-square',
			'template': '<div class="form-check mb-1"><input class="form-check-input" type="checkbox"><label class="form-check-label">{{props.label}}</label></div>',
			'propsDef':[
				{
					'name':'required',
					'type': 'boolean',
					'default': true
				},
				{
					'name':'disabled',
					'type': 'boolean',
					'default': false
				},
				{
					'name':'label',
					'type': 'text',
					'default': 'label'
				}
			]					
		},
		{
			'type':'widget',
			'nature': 'button-element',
			'display': 'Button',
			'sizeable': true,
			'icon': 'bi bi-send',
			'template': '<button :class="[props.outlined ? \'btn btn-outline-\'+props.style: \'btn btn-\'+props.style]"><i :class="props.icon" v-if="props.icon"></i> {{ props.label }}</button>',
			'propsDef':[
				{
					'name':'disabled',
					'type': 'boolean',
					'default': false
				},
				{
					'name':'icon',
					'type': 'text',
					'default': 'bi bi-send'
				},
				{
					'name':'label',
					'type': 'text',
					'default': 'button'
				},
				{
					'name':'style',
					'type': 'list',
					'values' : ['primary', 'secondary','info','success','warning','danger'],
					'default': 'primary'
				},
				{
					'name':'outlined',
					'type': 'boolean',
					'default': false
				}
			]
		}
	]
}