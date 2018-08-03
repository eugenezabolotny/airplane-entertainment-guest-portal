// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: any = {
    production: false,

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

environment.mediaUrl = 'http://192.168.52.10:81/';
