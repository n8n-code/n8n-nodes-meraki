import type { INodeProperties } from 'n8n-workflow';

export const monitoredMediaServersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Insight Monitored Media Servers",
					"value": "Get Organization Insight Monitored Media Servers",
					"action": "List the monitored media servers for this organization",
					"description": "List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/insight/monitoredMediaServers"
						}
					}
				},
				{
					"name": "Create Organization Insight Monitored Media Server",
					"value": "Create Organization Insight Monitored Media Server",
					"action": "Add a media server to be monitored for this organization",
					"description": "Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/insight/monitoredMediaServers"
						}
					}
				},
				{
					"name": "Delete Organization Insight Monitored Media Server",
					"value": "Delete Organization Insight Monitored Media Server",
					"action": "Delete a monitored media server from this organization",
					"description": "Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/insight/monitoredMediaServers/{{$parameter[\"monitoredMediaServerId\"]}}"
						}
					}
				},
				{
					"name": "Get Organization Insight Monitored Media Server",
					"value": "Get Organization Insight Monitored Media Server",
					"action": "Return a monitored media server for this organization",
					"description": "Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/insight/monitoredMediaServers/{{$parameter[\"monitoredMediaServerId\"]}}"
						}
					}
				},
				{
					"name": "Update Organization Insight Monitored Media Server",
					"value": "Update Organization Insight Monitored Media Server",
					"action": "Update a monitored media server for this organization",
					"description": "Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/insight/monitoredMediaServers/{{$parameter[\"monitoredMediaServerId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/insight/monitoredMediaServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Servers"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Servers"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Servers"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/insight/monitoredMediaServers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Create Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Create Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The IP address (IPv4 only) or hostname of the media server to monitor",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Create Organization Insight Monitored Media Server"
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
			"description": "The name of the VoIP provider",
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
						"Monitored Media Servers"
					],
					"operation": [
						"Create Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Create Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Delete Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Delete Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "Monitored Media Server ID",
			"name": "monitoredMediaServerId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Delete Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Delete Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "Monitored Media Server ID",
			"name": "monitoredMediaServerId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Get Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "Monitored Media Server ID",
			"name": "monitoredMediaServerId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The IP address (IPv4 only) or hostname of the media server to monitor",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the VoIP provider",
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
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
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
						"Monitored Media Servers"
					],
					"operation": [
						"Update Organization Insight Monitored Media Server"
					]
				}
			}
		},
];
