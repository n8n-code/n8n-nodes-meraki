import type { INodeProperties } from 'n8n-workflow';

export const switchStacksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Switch Stacks",
					"value": "Get Network Switch Stacks",
					"action": "List the switch stacks in a network",
					"description": "List the switch stacks in a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks"
						}
					}
				},
				{
					"name": "Create Network Switch Stack",
					"value": "Create Network Switch Stack",
					"action": "Create a stack",
					"description": "Create a stack",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks"
						}
					}
				},
				{
					"name": "Delete Network Switch Stack",
					"value": "Delete Network Switch Stack",
					"action": "Delete a stack",
					"description": "Delete a stack",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks/{{$parameter[\"switchStackId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Switch Stack",
					"value": "Get Network Switch Stack",
					"action": "Show a switch stack",
					"description": "Show a switch stack",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks/{{$parameter[\"switchStackId\"]}}"
						}
					}
				},
				{
					"name": "Add Network Switch Stack",
					"value": "Add Network Switch Stack",
					"action": "Add a switch to a stack",
					"description": "Add a switch to a stack",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks/{{$parameter[\"switchStackId\"]}}/add"
						}
					}
				},
				{
					"name": "Remove Network Switch Stack",
					"value": "Remove Network Switch Stack",
					"action": "Remove a switch from a stack",
					"description": "Remove a switch from a stack",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/switchStacks/{{$parameter[\"switchStackId\"]}}/remove"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/switchStacks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stacks"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stacks"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stacks"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switchStacks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Create Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Create Network Switch Stack"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new stack",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Create Network Switch Stack"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Serials",
			"name": "serials",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of switch serials to be added into the new stack",
			"routing": {
				"send": {
					"property": "serials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Create Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Create Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/switchStacks/{switchStackId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Delete Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Delete Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Switch Stack ID",
			"name": "switchStackId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Delete Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Delete Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/switchStacks/{switchStackId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Switch Stack ID",
			"name": "switchStackId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Get Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switchStacks/{switchStackId}/add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Add Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Add Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Switch Stack ID",
			"name": "switchStackId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Add Network Switch Stack"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Serial",
			"name": "serial",
			"type": "string",
			"default": "",
			"description": "The serial of the switch to be added",
			"routing": {
				"send": {
					"property": "serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Add Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Add Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/switchStacks/{switchStackId}/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Remove Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Remove Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "Switch Stack ID",
			"name": "switchStackId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Remove Network Switch Stack"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Serial",
			"name": "serial",
			"type": "string",
			"default": "",
			"description": "The serial of the switch to be removed",
			"routing": {
				"send": {
					"property": "serial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Remove Network Switch Stack"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Stacks"
					],
					"operation": [
						"Remove Network Switch Stack"
					]
				}
			}
		},
];
