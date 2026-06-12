import type { INodeProperties } from 'n8n-workflow';

export const adminsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Admins",
					"value": "Get Organization Admins",
					"action": "List the dashboard administrators in this organization",
					"description": "List the dashboard administrators in this organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/admins"
						}
					}
				},
				{
					"name": "Create Organization Admin",
					"value": "Create Organization Admin",
					"action": "Create a new dashboard administrator",
					"description": "Create a new dashboard administrator",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/admins"
						}
					}
				},
				{
					"name": "Delete Organization Admin",
					"value": "Delete Organization Admin",
					"action": "Revoke all access for a dashboard administrator within this organization",
					"description": "Revoke all access for a dashboard administrator within this organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/admins/{{$parameter[\"adminId\"]}}"
						}
					}
				},
				{
					"name": "Update Organization Admin",
					"value": "Update Organization Admin",
					"action": "Update an administrator",
					"description": "Update an administrator",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/admins/{{$parameter[\"adminId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/admins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Get Organization Admins"
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
						"Admins"
					],
					"operation": [
						"Get Organization Admins"
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
						"Admins"
					],
					"operation": [
						"Get Organization Admins"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/admins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Authentication Method",
			"name": "authenticationMethod",
			"type": "options",
			"default": "Cisco SecureX Sign-On",
			"description": "The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication",
			"options": [
				{
					"name": "Cisco Secure X Sign On",
					"value": "Cisco SecureX Sign-On"
				},
				{
					"name": "Email",
					"value": "Email"
				}
			],
			"routing": {
				"send": {
					"property": "authenticationMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email of the dashboard administrator. This attribute can not be updated.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
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
			"description": "The name of the dashboard administrator",
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of networks that the dashboard administrator has privileges on",
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Org Access",
			"name": "orgAccess",
			"type": "options",
			"default": "enterprise",
			"description": "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'",
			"options": [
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				}
			],
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of tags that the dashboard administrator has privileges on",
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Create Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationId}/admins/{adminId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Delete Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Delete Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Admin ID",
			"name": "adminId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Delete Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Delete Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/admins/{adminId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Admin ID",
			"name": "adminId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the dashboard administrator",
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Networks",
			"name": "networks",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of networks that the dashboard administrator has privileges on",
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Org Access",
			"name": "orgAccess",
			"type": "options",
			"default": "enterprise",
			"description": "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'",
			"options": [
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				}
			],
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of tags that the dashboard administrator has privileges on",
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
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
						"Admins"
					],
					"operation": [
						"Update Organization Admin"
					]
				}
			}
		},
];
