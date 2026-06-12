import type { INodeProperties } from 'n8n-workflow';

export const bluetoothSettingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					]
				}
			},
			"options": [
				{
					"name": "Update Device Wireless Bluetooth Settings",
					"value": "Update Device Wireless Bluetooth Settings",
					"action": "Update the bluetooth settings for a wireless device",
					"description": "Update the bluetooth settings for a wireless device",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/devices/{{$parameter[\"serial\"]}}/wireless/bluetooth/settings"
						}
					}
				},
				{
					"name": "Get Network Bluetooth Settings",
					"value": "Get Network Bluetooth Settings",
					"action": "Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.",
					"description": "Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/bluetoothSettings"
						}
					}
				},
				{
					"name": "Update Network Bluetooth Settings",
					"value": "Update Network Bluetooth Settings",
					"action": "Update the Bluetooth settings for a network",
					"description": "Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/bluetoothSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /devices/{serial}/wireless/bluetooth/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Major",
			"name": "major",
			"type": "number",
			"default": 0,
			"description": "Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
			"routing": {
				"send": {
					"property": "major",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Minor",
			"name": "minor",
			"type": "number",
			"default": 0,
			"description": "Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
			"routing": {
				"send": {
					"property": "minor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Update Device Wireless Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/bluetoothSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Get Network Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Get Network Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Get Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/bluetoothSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Advertising Enabled",
			"name": "advertisingEnabled",
			"type": "boolean",
			"default": true,
			"description": "Whether APs will advertise beacons.",
			"routing": {
				"send": {
					"property": "advertisingEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Major",
			"name": "major",
			"type": "number",
			"default": 0,
			"description": "The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
			"routing": {
				"send": {
					"property": "major",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Major Minor Assignment Mode",
			"name": "majorMinorAssignmentMode",
			"type": "options",
			"default": "Non-unique",
			"description": "The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')",
			"options": [
				{
					"name": "Non Unique",
					"value": "Non-unique"
				},
				{
					"name": "Unique",
					"value": "Unique"
				}
			],
			"routing": {
				"send": {
					"property": "majorMinorAssignmentMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Minor",
			"name": "minor",
			"type": "number",
			"default": 0,
			"description": "The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
			"routing": {
				"send": {
					"property": "minor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Scanning Enabled",
			"name": "scanningEnabled",
			"type": "boolean",
			"default": true,
			"description": "Whether APs will scan for Bluetooth enabled clients.",
			"routing": {
				"send": {
					"property": "scanningEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"description": "The UUID to be used in the beacon identifier.",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
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
						"Bluetooth Settings"
					],
					"operation": [
						"Update Network Bluetooth Settings"
					]
				}
			}
		},
];
