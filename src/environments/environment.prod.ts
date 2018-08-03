export const environment: any = {
    production: true,

    // api: 'php',
    api: 'python',

    server: '192.168.52.10',
    // server: '192.168.52.20',
};

switch (environment.api) {
    case 'python': {
        environment.serverUrl = 'http://' + environment.server + ':4200/api/v1.0/';
        break;
    }
    case 'php': {
        environment.serverUrl = 'http://' + environment.server + ':801/api/';
        break;
    }
}

environment.mediaUrl = 'http://192.168.52.10/';
