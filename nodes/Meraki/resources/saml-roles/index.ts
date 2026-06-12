import type { INodeProperties } from 'n8n-workflow';

export const samlRolesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Saml Roles",
					"value": "Get Organization Saml Roles",
					"action": "List the SAML roles for this organization",
					"description": "List the SAML roles for this organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/samlRoles"
						}
					}
				},
				{
					"name": "Create Organization Saml Role",
					"value": "Create Organization Saml Role",
					"action": "Create a SAML role",
					"description": "Create a SAML role",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/samlRoles"
						}
					}
				},
				{
					"name": "Get Organization Saml Role",
					"value": "Get Organization Saml Role",
					"action": "Return a SAML role",
					"description": "Return a SAML role",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/samlRoles/{{$parameter[\"samlRoleId\"]}}"
						}
					}
				},
				{
					"name": "Update Organization Saml Role",
					"value": "Update Organization Saml Role",
					"action": "Update a SAML role",
					"description": "Update a SAML role",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/samlRoles/{{$parameter[\"samlRoleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/samlRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Roles"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Roles"
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
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/samlRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of networks that the SAML administrator has privileges on",
			"routing": {
				"send": {
					"property": "networks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Org Access",
			"name": "orgAccess",
			"type": "string",
			"default": "",
			"description": "The privilege of the SAML administrator on the organization",
			"routing": {
				"send": {
					"property": "orgAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "string",
			"default": "",
			"description": "The role of the SAML administrator",
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of tags that the SAML administrator has privleges on",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
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
						"SAML Roles"
					],
					"operation": [
						"Create Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/samlRoles/{samlRoleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Saml Role ID",
			"name": "samlRoleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Role"
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
						"SAML Roles"
					],
					"operation": [
						"Get Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/samlRoles/{samlRoleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Saml Role ID",
			"name": "samlRoleId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of networks that the SAML administrator has privileges on",
			"routing": {
				"send": {
					"property": "networks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Org Access",
			"name": "orgAccess",
			"type": "string",
			"default": "",
			"description": "The privilege of the SAML administrator on the organization",
			"routing": {
				"send": {
					"property": "orgAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"type": "string",
			"default": "",
			"description": "The role of the SAML administrator",
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of tags that the SAML administrator has privleges on",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
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
						"SAML Roles"
					],
					"operation": [
						"Update Organization Saml Role"
					]
				}
			}
		},
];
