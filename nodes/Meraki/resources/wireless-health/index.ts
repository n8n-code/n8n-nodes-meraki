import type { INodeProperties } from 'n8n-workflow';

export const wirelessHealthDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Clients Connection Stats",
					"value": "Get Network Clients Connection Stats",
					"action": "Aggregated connectivity info for this network, grouped by clients",
					"description": "Aggregated connectivity info for this network, grouped by clients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/connectionStats"
						}
					}
				},
				{
					"name": "Get Network Clients Latency Stats",
					"value": "Get Network Clients Latency Stats",
					"action": "Aggregated latency info for this network, grouped by clients",
					"description": "Aggregated latency info for this network, grouped by clients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/latencyStats"
						}
					}
				},
				{
					"name": "Get Network Client Connection Stats",
					"value": "Get Network Client Connection Stats",
					"action": "Aggregated connectivity info for a given client on this network",
					"description": "Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/connectionStats"
						}
					}
				},
				{
					"name": "Get Network Client Latency Stats",
					"value": "Get Network Client Latency Stats",
					"action": "Aggregated latency info for a given client on this network",
					"description": "Aggregated latency info for a given client on this network. Clients are identified by their MAC.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/clients/{{$parameter[\"clientId\"]}}/latencyStats"
						}
					}
				},
				{
					"name": "Get Network Connection Stats",
					"value": "Get Network Connection Stats",
					"action": "Aggregated connectivity info for this network",
					"description": "Aggregated connectivity info for this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/connectionStats"
						}
					}
				},
				{
					"name": "Get Network Devices Connection Stats",
					"value": "Get Network Devices Connection Stats",
					"action": "Aggregated connectivity info for this network, grouped by node",
					"description": "Aggregated connectivity info for this network, grouped by node",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/connectionStats"
						}
					}
				},
				{
					"name": "Get Network Devices Latency Stats",
					"value": "Get Network Devices Latency Stats",
					"action": "Aggregated latency info for this network, grouped by node",
					"description": "Aggregated latency info for this network, grouped by node",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/latencyStats"
						}
					}
				},
				{
					"name": "Get Network Device Connection Stats",
					"value": "Get Network Device Connection Stats",
					"action": "Aggregated connectivity info for a given AP on this network",
					"description": "Aggregated connectivity info for a given AP on this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/connectionStats"
						}
					}
				},
				{
					"name": "Get Network Device Latency Stats",
					"value": "Get Network Device Latency Stats",
					"action": "Aggregated latency info for a given AP on this network",
					"description": "Aggregated latency info for a given AP on this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/devices/{{$parameter[\"serial\"]}}/latencyStats"
						}
					}
				},
				{
					"name": "Get Network Failed Connections",
					"value": "Get Network Failed Connections",
					"action": "List of all failed client connection events on this network in a given time range",
					"description": "List of all failed client connection events on this network in a given time range",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/failedConnections"
						}
					}
				},
				{
					"name": "Get Network Latency Stats",
					"value": "Get Network Latency Stats",
					"action": "Aggregated latency info for this network",
					"description": "Aggregated latency info for this network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/latencyStats"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/clients/connectionStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/latencyStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Clients Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/connectionStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/clients/{clientId}/latencyStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Client Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/connectionStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/connectionStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/latencyStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Devices Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/connectionStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Connection Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/devices/{serial}/latencyStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Device Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/failedConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Serial",
			"name": "serial",
			"description": "Filter by AP",
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"description": "Filter by client MAC",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "clientId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Failed Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/latencyStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 180 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 7 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Band",
			"name": "band",
			"description": "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
			"default": "2.4",
			"type": "options",
			"options": [
				{
					"name": "2 4",
					"value": "2.4"
				},
				{
					"name": "5",
					"value": "5"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "band",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "Filter results by SSID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"description": "Filter results by VLAN",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Ap Tag",
			"name": "apTag",
			"description": "Filter results by AP Tag",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
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
						"Wireless Health"
					],
					"operation": [
						"Get Network Latency Stats"
					]
				}
			}
		},
];
