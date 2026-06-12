import type { INodeProperties } from 'n8n-workflow';

export const piiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Pii Pii Keys",
					"value": "Get Network Pii Pii Keys",
					"action": "List the keys required to access Personally Identifiable Information (PII) for a given identifier",
					"description": "List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/piiKeys\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/piiKeys"
						}
					}
				},
				{
					"name": "Get Network Pii Requests",
					"value": "Get Network Pii Requests",
					"action": "List the PII requests for this network or organization",
					"description": "List the PII requests for this network or organization\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/requests"
						}
					}
				},
				{
					"name": "Create Network Pii Request",
					"value": "Create Network Pii Request",
					"action": "Submit a new delete or restrict processing PII request",
					"description": "Submit a new delete or restrict processing PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests\n```",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/requests"
						}
					}
				},
				{
					"name": "Delete Network Pii Request",
					"value": "Delete Network Pii Request",
					"action": "Delete a restrict processing PII request",
					"description": "Delete a restrict processing PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests/{requestId}\n```",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/requests/{{$parameter[\"requestId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Pii Request",
					"value": "Get Network Pii Request",
					"action": "Return a PII request",
					"description": "Return a PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests/{requestId}\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/requests/{{$parameter[\"requestId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Pii Sm Devices For Key",
					"value": "Get Network Pii Sm Devices For Key",
					"action": "Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier",
					"description": "Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/smDevicesForKey\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/smDevicesForKey"
						}
					}
				},
				{
					"name": "Get Network Pii Sm Owners For Key",
					"value": "Get Network Pii Sm Owners For Key",
					"action": "Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier",
					"description": "Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/smOwnersForKey\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/pii/smOwnersForKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/pii/piiKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "The username of a Systems Manager user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "The email of a network user account or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Mac",
			"name": "mac",
			"description": "The MAC of a network client device or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"description": "The serial of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serial",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Imei",
			"name": "imei",
			"description": "The IMEI of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "imei",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "Bluetooth Mac",
			"name": "bluetoothMac",
			"description": "The MAC of a Bluetooth client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bluetoothMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Pii Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/pii/requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Requests"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Requests"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/pii/requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Datasets",
			"name": "datasets",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The datasets related to the provided key that should be deleted. Only applies to \"delete\" requests. The value \"all\" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)",
			"routing": {
				"send": {
					"property": "datasets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"description": "The email of a network user account. Only applies to \"delete\" requests.",
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
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Mac",
			"name": "mac",
			"type": "string",
			"default": "",
			"description": "The MAC of a network client device. Applies to both \"restrict processing\" and \"delete\" requests.",
			"routing": {
				"send": {
					"property": "mac",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Sm Device ID",
			"name": "smDeviceId",
			"type": "string",
			"default": "",
			"description": "The sm_device_id of a Systems Manager device. The only way to \"restrict processing\" or \"delete\" a Systems Manager device. Must include \"device\" in the dataset for a \"delete\" request to destroy the device.",
			"routing": {
				"send": {
					"property": "smDeviceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Sm User ID",
			"name": "smUserId",
			"type": "string",
			"default": "",
			"description": "The sm_user_id of a Systems Manager user. The only way to \"restrict processing\" or \"delete\" a Systems Manager user. Must include \"user\" in the dataset for a \"delete\" request to destroy the user.",
			"routing": {
				"send": {
					"property": "smUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "delete",
			"description": "One of \"delete\" or \"restrict processing\"",
			"options": [
				{
					"name": "Delete",
					"value": "delete"
				},
				{
					"name": "Restrict Processing",
					"value": "restrict processing"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "The username of a network log in. Only applies to \"delete\" requests.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Create Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/pii/requests/{requestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Delete Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Delete Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Delete Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Delete Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/pii/requests/{requestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "Request ID",
			"name": "requestId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Request"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Request"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/pii/smDevicesForKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "The username of a Systems Manager user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "The email of a network user account or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Mac",
			"name": "mac",
			"description": "The MAC of a network client device or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"description": "The serial of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serial",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Imei",
			"name": "imei",
			"description": "The IMEI of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "imei",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "Bluetooth Mac",
			"name": "bluetoothMac",
			"description": "The MAC of a Bluetooth client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bluetoothMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Devices For Key"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/pii/smOwnersForKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "The username of a Systems Manager user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "The email of a network user account or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Mac",
			"name": "mac",
			"description": "The MAC of a network client device or a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"description": "The serial of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serial",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Imei",
			"name": "imei",
			"description": "The IMEI of a Systems Manager device",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "imei",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
		{
			"displayName": "Bluetooth Mac",
			"name": "bluetoothMac",
			"description": "The MAC of a Bluetooth client",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bluetoothMac",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
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
						"PII"
					],
					"operation": [
						"Get Network Pii Sm Owners For Key"
					]
				}
			}
		},
];
