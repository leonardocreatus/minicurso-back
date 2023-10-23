import { RedocOptions } from '@juicyllama/nestjs-redoc';

export class SwaggerDocs {
  static setup() {
    const options: RedocOptions = {
      title: 'Pokemon Blockchain API',
      logo: {
        url: 'https://i.postimg.cc/PrrkNmHR/53271-Creatus-DV-02.png',
        backgroundColor: '#2e3336',
        altText: 'Creatus logo',
      },
      noAutoAuth: false,
      favicon: 'https://i.postimg.cc/mrLdKK1d/Ca-Crea-copiar.png',
      theme: {
        colors: {
          http: {
            get: '#9933cc',
            post: '#77b300',
            put: '#ff8800',
            options: '#947014',
            patch: '#bf581d',
            delete: '#cc3333',
            basic: '#c97a7e',
            link: '#4570b8',
            head: '#A23DAD',
          },
          responses: {
            success: {
              color: '#26AB33',
              backgroundColor: 'rgba(28, 171, 51, 0.1)',
              tabTextColor: '#26AB33',
            },
            error: {
              color: '#cc3333',
              backgroundColor: 'rgba(201, 122, 126, 0.19)',
              tabTextColor: '#cc3333',
            },
            redirect: {},
            info: {},
          },
        },
        typography: {
          fontSize: '14px',
          lineHeight: '1.5em',
          fontWeightRegular: '400',
          fontWeightBold: '600',
          fontWeightLight: '300',
          fontFamily: 'Roboto, sans-serif',
          smoothing: 'antialiased',
          optimizeSpeed: true,
          links: {
            color: '#4570b8',
            visited: '',
            hover: '',
            textDecoration: '',
            hoverTextDecoration: '',
          },
          code: {
            backgroundColor: '#2e3336',
            fontFamily: 'Courier, monospace',
          },
          headings: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            lineHeight: '1.6em',
          },
        },
        rightPanel: {
          backgroundColor: '#2e3336',
          textColor: '#FFFFFF',
          width: '35%',
          servers: {
            overlay: {
              backgroundColor: '#2e3336',
              textColor: '#FFFFFF',
            },
            url: {
              backgroundColor: '#FFFFFF',
            },
          },
          codeBlock: {
            backgroundColor: '#2e3336',
          },
        },
        sidebar: {
          width: '280px',
          backgroundColor: '#2e3336',
          borderRadius: '8px',
          textColor: '#F2F2F2',
          activeTextColor: '#F2F2F2',
          activeBackgroundColor: '#000000',
          rightLineColor: '#0F75D4',
          separatorLabelColor: '#0F75D4',
          groupItems: {
            activeBackgroundColor: '#0F75D4',
            activeTextColor: '#F2F2F2',
            textTransform: 'uppercase',
            subItemsColor: '#000000',
          },
          level1Items: {
            activeBackgroundColor: '#0F75D4',
            activeTextColor: '#F2F2F2',
            textTransform: ' ',
          },
          arrow: {
            size: ' ',
            color: '#FFFFFF',
          },
        },
      },
      // nativeScrollbars: true,
      sortPropsAlphabetically: false,
      hideDownloadButton: false,
      // hideHostname: false,
      showExtensions: true,
      expandResponses: '200, 201',

      tagGroups: [
        // {
        //   name: 'Autenticação',
        //   tags: ['Login'],
        // },
        // {
        //   name: 'Empresas',
        //   tags: ['Empresas'],
        // },
        {
          name: 'Pokemons',
          tags: ['Pokemons'],
        },

        // {
        //   name: 'Tags',
        //   tags: ['Tags'],
        // },
        // {
        //   name: 'Colaboradores',
        //   tags: ['Colaborador'],
        // },
        // {
        //   name: 'Grupos',
        //   tags: ['Grupos'],
        // },
        // {
        //   name: 'Fluxo de Caixa',
        //   tags: [
        //     'Carteira',
        //     'Categorias e Tipos de Pagamento',
        //     'Finanças',
        //     'Cobranças',
        //   ],
        // },
      ],
      redocVersion: 'latest',
    };

    return options;
  }
}
