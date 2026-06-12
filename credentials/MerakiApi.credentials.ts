import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MerakiApi implements ICredentialType {
        name = 'N8nDevMerakiApi';

        displayName = 'Meraki API';

        icon: Icon = { light: 'file:../nodes/Meraki/meraki.png', dark: 'file:../nodes/Meraki/meraki.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.meraki.com/api/v0',
                        required: true,
                        placeholder: 'https://api.meraki.com/api/v0',
                        description: 'The base URL of your Meraki API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Cisco-Meraki-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
